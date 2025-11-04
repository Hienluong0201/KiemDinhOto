"use client";

import { useEffect, useState } from "react";
import {
  Typography,
  Paper,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Pagination,
  CircularProgress,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import StationService from "@/services/SationService";
import { formatDate } from "@/utils/formatDate";
import Head from "next/head";
import slugify from "slugify";
import { formatNumberVN } from "@/helper/common";
import companyInfo from "@/constants/companyInfo";

// News Item Component
const NewsItem = ({ news }) => (
  <Card
    onClick={() => {
      window.location.href = `/chi-tiet-tin-tuc/${slugify(
        news.stationNewsTitle
      )}-${news.stationNewsId}`;
    }}
    sx={{
      boxShadow: "none",
      borderBottom: "1px solid #e0e0e0",
      pb: 2,
      display: "flex",
      alignItems: "center",
      mb: 2,
      borderRadius: 0,
      height: 130,
      overflow: "hidden",
      ":hover": {
        cursor: "pointer",
      },
    }}
  >
    {/* Ảnh bên trái */}
    <CardMedia
      component="img"
      image={news.stationNewsAvatar}
      alt={news.stationNewsCategoryTitle}
      loading="lazy"
      sx={{
        width: { xs: 150, sm: 200 },
        height: { xs: 100, sm: "100%" },
        objectFit: "cover",
      }}
    />
    <CardContent
      sx={{
        flex: 1,
        padding: 1.5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minWidth: 0,
      }}
    >
      <Typography
        variant="subtitle1"
        className="!text-[var(--primary-color)]"
        component={"h2"}
        sx={{
          fontWeight: "bold",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          fontSize: "0.95rem",
          mb: 0.5,
        }}
      >
        {news.stationNewsTitle}
      </Typography>
      <Typography
        variant="caption"
        sx={{ color: "gray", fontSize: "0.75rem", mb: 0.3 }}
      >
        Ngày {formatDate(news.stationNewsUpdatedAt)}
      </Typography>

      <Typography variant="caption" sx={{ color: "gray", fontSize: "0.75rem" }}>
        {formatNumberVN(news.totalViewed)} lượt xem
      </Typography>
    </CardContent>
  </Card>
);

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: companyInfo?.shortName,
  url: `${process.env.NEXT_PUBLIC_WEB_URL}/tin-tuc`,
  logo: `${process.env.NEXT_PUBLIC_WEB_URL}/tintuc.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+84${+companyInfo?.phoneNumber?.replaceAll(".", "")}`,
    contactType: "Customer Service",
    email: companyInfo?.email,
  },
  sameAs: [process.env.NEXT_PUBLIC_WEB_TTDK_URL],
};

export default function NewsPage() {
  const router = useRouter();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter] = useState({
    limit: 10,
    skip: 0,
  });

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await StationService.getNewsPenaltyList({ ...filter });
        const { statusCode, data } = response;

        if (statusCode === 200) {
          setNews(data?.data || []);
          setTotalPages(
            Math.ceil((data?.data?.length || 0) / filter.limit) || 1
          );
        } else {
          console.warn("Unexpected status code:", statusCode);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [page]);

  const handlePageChange = (event, value) => {
    setFilter((prev) => ({
      ...prev,
      skip: (value - 1) * prev.limit,
    }));
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Tin tức & Thông báo | {companyInfo?.shortName}</title>
        <meta
          name="description"
          content={`Cập nhật tin tức, thông báo mới nhất từ trung tâm đăng kiểm ${companyInfo?.shortName}. Thông tin chính xác, nhanh chóng và đầy đủ.`}
        />
        <meta
          name="keywords"
          content={`tin tức đăng kiểm, thông báo ${companyInfo?.shortName}, tin tức xe, kiểm định xe, trung tâm đăng kiểm`}
        />
        <meta charSet="UTF-8" />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_WEB_URL}/tin-tuc`}
        />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={`Tin tức & Thông báo | ${companyInfo?.shortName}`} />
        <meta
          property="og:description"
          content={`Cập nhật tin tức và thông báo mới nhất từ trung tâm đăng kiểm ${companyInfo?.shortName}.`}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_WEB_URL}/tintuc.png`}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_WEB_URL}/tin-tuc`}
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Tin tức & Thông báo | ${companyInfo?.shortName}`} />
        <meta
          name="twitter:description"
          content={`Thông tin chính thức từ trung tâm đăng kiểm ${companyInfo?.shortName}.`}
        />
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_WEB_URL}/tintuc.png`}
        />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      <>
        <Typography
          className="!text-[var(--primary-color)]"
          variant="h4"
          component="h1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", sm: "2rem" },
            textAlign: "center",
            mb: 3,
          }}
        >
          Tin Tức Tình Hình Phạt Nguội Toàn Quốc
        </Typography>

        {/* Main content */}
        <Box>
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
              <CircularProgress />
            </Box>
          ) : news.length === 0 ? (
            <Typography
              variant="body1"
              sx={{ textAlign: "center", mt: 4, color: "text.secondary" }}
            >
              Không có tin tức mới
            </Typography>
          ) : (
            <>
              <Grid container width={"100%"}>
                <Grid item xs={12} className="!flex-1">
                  {news.map((item, index) => (
                    <NewsItem key={index} news={item} />
                  ))}
                </Grid>
              </Grid>

              <Box
                sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 2 }}
              >
                <Pagination
                  className="!bg-white"
                  count={totalPages}
                  page={page}
                  onChange={handlePageChange}
                  shape="rounded"
                  size="large"
                  sx={{
                    "& .MuiPaginationItem-root.Mui-selected": {
                      backgroundColor: "var(--primary-color)",
                      color: "#fff", // đảm bảo text nhìn rõ
                    },
                  }}
                />
              </Box>
            </>
          )}
        </Box>
      </>
    </>
  );
}
