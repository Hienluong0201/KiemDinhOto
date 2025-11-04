"use client";

import { useEffect, useState } from "react";
import {
  Typography,
  Paper,
  Box,
  Divider,
  IconButton,
  CircularProgress,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import StationService from "@/services/SationService";
import { formatDate } from "@/utils/formatDate";
import slugify from "slugify";
import Link from "next/link";
import { formatNumberVN } from "@/helper/common";

export default function NewsDetailPage() {
  const router = useRouter();
  const params = useParams();
  const lastIndexOfSlash = params.id.lastIndexOf("-");
  const id = params.id?.slice(lastIndexOfSlash + 1);
  const [newsDetail, setNewsDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      if (!id) return;

      setLoading(true);

      try {
        const response = await StationService.getNewsDetail({ id });
        const { statusCode, data } = response;

        if (statusCode === 200) {
          setNewsDetail(data || []);
        } else {
          setIsNotFound(true);
        }
      } catch (error) {
        setIsNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [id]);

  return (
    <>
      {/* <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          p: 2,
          borderBottom: "1px solid #e0e0e0",
          bgcolor: "#fff",
        }}
      >
        <IconButton onClick={() => router.back()} sx={{ mr: 1, zIndex: 2 }}>
          <ArrowBackIcon className="!text-[var(--primary-color)]" />
        </IconButton>
        <Typography
          variant="h6"
          component="h1"
          className="!text-[var(--primary-color)]"
          sx={{
            fontWeight: "bold",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Chi Tiết Tin Tức
        </Typography>
      </Box> */}
      <Typography
        className="!text-[var(--primary-color)]"
        variant="h4"
        component="h2"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", sm: "2rem" },
          textAlign: "center",
          mb: 3,
        }}
      >
        Chi Tiết Tin Tức
      </Typography>
      {/* Main content */}
      <Box>
        {loading && newsDetail === null ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
            <CircularProgress />
          </Box>
        ) : newsDetail ? (
          <>
            <Typography
              variant="h5"
              component="h1"
              sx={{
                fontWeight: "bold",
                mb: 2,
                color: "#333",
              }}
            >
              {newsDetail?.stationNewsTitle}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "text.secondary",
                mb: 3,
              }}
            >
              <CalendarTodayIcon sx={{ fontSize: "0.875rem", mr: 0.5 }} />
              <Typography variant="caption" sx={{ mr: 2 }}>
                {formatDate(newsDetail?.stationNewsUpdatedAt)}
              </Typography>
              <VisibilityIcon sx={{ fontSize: "0.875rem", mr: 0.5 }} />
              <Typography variant="caption">
                {formatNumberVN(newsDetail.totalViewed)} lượt xem
              </Typography>
            </Box>

            <Box
              sx={{
                mb: 3,
                position: "relative",
                width: "100%",
                height: { xs: 200, sm: 300 },
              }}
            >
              <Image
                src={newsDetail?.stationNewsAvatar || "/placeholder.svg"}
                alt={newsDetail?.stationNewsCategoryTitle || ""}
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: 8 }}
              />
            </Box>

            <Box
              sx={{
                mb: 4,
                "& p": {
                  marginBottom: "1rem",
                  lineHeight: 1.8,
                  fontSize: "1rem",
                },
                "& h1, & h2, & h3": {
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  fontWeight: "bold",
                },
                "& ul": {
                  paddingLeft: "1.5rem",
                  marginBottom: "1rem",
                },
                "& li": {
                  marginBottom: "0.5rem",
                },
                "& img": {
                  maxWidth: "100%",
                  borderRadius: "8px",
                  margin: "1rem 0",
                },
                "& a": {
                  color: "var(--primary-color)",
                  textDecoration: "underline",
                },
              }}
              className="force-app-font"
              dangerouslySetInnerHTML={{
                __html: newsDetail?.stationNewsContent || "",
              }}
            />

            <Divider sx={{ my: 3 }} />
            {newsDetail.relatedNews?.length > 0 && (
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", mb: 1 }}
                >
                  Tin liên quan:
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {newsDetail?.relatedNews.map((item, index) => (
                    <Box key={index} component="li" sx={{ mb: 1 }}>
                      <Typography
                        variant="body2"
                        component={Link}
                        href={`/chi-tiet-tin-tuc/${slugify(
                          item.stationNewsTitle
                        )}-${item.stationNewsId}`}
                        sx={{
                          textDecoration: "none",
                          "&:hover": { textDecoration: "underline" },
                          color: "var(--primary-color)",
                        }}
                      >
                        {item?.stationNewsTitle}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
          </>
        ) : (
          isNotFound && (
            <Typography variant="body1">Không tìm thấy tin tức</Typography>
          )
        )}
      </Box>
    </>
  );
}
