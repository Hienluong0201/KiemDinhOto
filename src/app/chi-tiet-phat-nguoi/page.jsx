"use client";

import { Suspense, useEffect, useState } from "react";
import {
  Typography,
  Paper,
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { useSearchParams } from "next/navigation";
import UserService from "@/services/UserService";
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";

// Extracted component for notification box
const NotificationBox = () => (
  <Paper
    elevation={0}
    sx={{
      p: 2,
      mb: 3,
      bgcolor: "#fff9e6",
      border: "1px solid #ffe58f",
      borderRadius: 2,
      display: "flex",
      alignItems: "center",
    }}
  >
    <LightbulbIcon sx={{ color: "#faad14", mr: 2, fontSize: 32 }} />
    <Box sx={{ flex: 1 }}>
      <Typography variant="body2">
        Tự động tra cứu và gửi thông tin phạt nguội qua tin nhắn Zalo, SMS,
        Email.
      </Typography>
      <Typography
        href={`${process.env.NEXT_PUBLIC_AFFILIATE_WEB_URL}/AppSharing/TraCuuPhatNguoi?appuserid=873523`}
        component={Link}
        variant="body2"
        sx={{
          fontWeight: "bold",
          textDecoration: "none",
          "&:hover": { textDecoration: "underline" },
          color: "var(--primary-color)",
        }}
      >
        Đăng kí ngay
      </Typography>
    </Box>
  </Paper>
);

// Extracted component for violation details table
const ViolationTable = ({ violation, carType = "Phương Tiện" }) => {
  return (
    <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              sx={{
                width: "30%",
                bgcolor: "#fafafa",
                fontWeight: "medium",
              }}
            >
              Biển số xe:
            </TableCell>
            <TableCell>{violation?.customerRecordPlatenumber || "—"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              sx={{
                width: "30%",
                bgcolor: "#fafafa",
                fontWeight: "medium",
              }}
            >
              Loại phương tiện:
            </TableCell>
            <TableCell>{carType || "—"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              sx={{
                width: "30%",
                bgcolor: "#fafafa",
                fontWeight: "medium",
              }}
            >
              Lỗi vi phạm
            </TableCell>
            <TableCell>{violation?.crimeRecordContent || "—"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              sx={{
                width: "30%",
                bgcolor: "#fafafa",
                fontWeight: "medium",
              }}
            >
              Thời gian vi phạm
            </TableCell>
            <TableCell>{formatDate(violation?.crimeRecordTime)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              sx={{
                width: "30%",
                bgcolor: "#fafafa",
                fontWeight: "medium",
              }}
            >
              Địa điểm vi phạm
            </TableCell>
            {/* <TableCell>{violation?.crimeRecordLocation || "—"}</TableCell> */}
            <TableCell>{"—"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              sx={{
                width: "30%",
                bgcolor: "#fafafa",
                fontWeight: "medium",
              }}
            >
              Trạng thái
            </TableCell>
            <TableCell>
              {violation?.crimeRecordStatus ? (
                <Chip
                  label={violation.crimeRecordStatus}
                  size="small"
                  sx={{
                    bgcolor: "#ffebee",
                    color: "#f44336",
                    fontWeight: "medium",
                    fontSize: "0.75rem",
                  }}
                />
              ) : (
                "—"
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              sx={{
                width: "30%",
                bgcolor: "#fafafa",
                fontWeight: "medium",
              }}
            >
              Số điện thoại
            </TableCell>
            <TableCell>
              {/* {violation?.crimeRecordContact || "—"} */}
              {"-"}
              </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              sx={{
                width: "30%",
                bgcolor: "#fafafa",
                fontWeight: "medium",
              }}
            >
              Đơn vị xử lý
            </TableCell>
            {/* <TableCell>{violation?.crimeRecordOrigin || "—"}</TableCell> */}
            <TableCell>{"—"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              sx={{
                width: "30%",
                bgcolor: "#fafafa",
                fontWeight: "medium",
              }}
            >
              Địa chỉ
            </TableCell>
            <TableCell>{violation?.crimeRecordPIC || "—"}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const ViolationDetailsPage = () => {
  const params = useSearchParams();
  const licensePlate = params?.get("lisencePlate"); // Extract license plate
  const carType = params?.get("carType"); // Extract car type
  const [violations, setViolations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchViolations = async () => {
      if (!licensePlate) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const response = await UserService.getCrimeRecords({
          filter: { customerRecordPlatenumber: licensePlate },
        });

        if (!isMounted) return;

        if (response.statusCode === 200) {
          setViolations(response.data?.data || []);
        } else {
          setError(`Lỗi: ${response.statusCode}`);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message || "Không thể lấy dữ liệu vi phạm");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchViolations();

    return () => {
      isMounted = false; // cleanup để tránh setState khi component đã bị unmount
    };
  }, [licensePlate]);

  return (
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
        Chi Tiết Vi Phạm
      </Typography>
      <Box sx={{ p: 2 }}>
        <Typography
          variant="subtitle1"
          component="h2"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#333",
            borderBottom: "1px solid #e0e0e0",
            pb: 2,
          }}
        >
          Thông tin vi phạm giao thông
        </Typography>

        <NotificationBox />

        {isLoading ? (
          <Typography variant="body1">Đang tải dữ liệu...</Typography>
        ) : error ? (
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        ) : violations.length > 0 ? (
          violations.map((violation, index) => (
            <ViolationTable
              key={`violation-${index}-${violation.customerRecordPlatenumber}`}
              violation={violation}
              carType={carType}
            />
          ))
        ) : (
          <Typography variant="body1">
            Không tìm thấy dữ liệu vi phạm
          </Typography>
        )}
      </Box>
    </>
  );
};

export default function PageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ViolationDetailsPage />
    </Suspense>
  );
}
