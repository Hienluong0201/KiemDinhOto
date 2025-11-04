"use client";

import { useState } from "react";
import {
  Paper,
  Typography,
  FormControl,
  TextField,
  Button,
  Box,
  FormHelperText,
  Autocomplete,
  Link,
} from "@mui/material";
import LoadingSpinner from "./loadingSpinner";
import UserService from "@/services/UserService";
import { useRouter } from "next/navigation"; // ✅ đúng cho App Router
import SerialGuideDialog from "./serialGuideDialog";
import NextLink from "next/link";

export default function ViolationLookup() {
  const router = useRouter();
  const [criminalNotifycation, setCriminalNotyfication] = useState(null);
  const [isAPIError, setIsAPIErrors] = useState(false);
  const [linkSearch, setLinkSearch] = useState(null);
  const SearchType = {
    toan_dien: { value: "toan_dien", label: "Tra cứu phạt nguội toàn diện" },
    cuc_csgt: {
      value: "cuc_csgt",
      label: "Tra cứu phạt nguội từ CSGT",
      link: "https://csgt.vn",
    },
    cuc_dang_kiem: {
      value: "cuc_dang_kiem",
      label: "Tra cứu phạt nguội từ Cục Đăng Kiểm",
      link: "http://vr.org.vn",
    },
  };

  const VehicleTypes = {
    oto: { value: 1, label: "Ô tô" },
    xemay: { value: 30, label: "Xe máy" },
    maydien: { value: 40, label: "Xe máy điện" },
  };

  const ERROR_MESSAGES = {
    INVALID_PLATE_NUMBER: {
      value: "INVALID_PLATE_NUMBER",
      message: "Biển số không hợp lệ",
    },
    INVALID_VEHICLE_CERTIFICATE: {
      value: "INVALID_VEHICLE_CERTIFICATE",
      message: "Số seri không hợp lệ",
    },
    VEHICLE_NOT_FOUND: {
      value: "VEHICLE_NOT_FOUND",
      message: "Không tìm thấy thông tin phương tiện",
    },
  };

  const ResultSearchViolation = ({ hasWarning, notifycation }) => (
    <Box
      sx={{
        backgroundColor: hasWarning
          ? "error.light"
          : isAPIError
          ? "var(--disabled-color)"
          : "success.light",
        color: "white",
        padding: 2,
        borderRadius: 2,
      }}
    >
      {hasWarning ? (
        <Box display={"flex"} flexDirection="column" gap={2}>
          <Typography textAlign="center" variant="body1" fontWeight="bold">
            {notifycation || "Phương tiện của bạn đang có cảnh báo!"}
          </Typography>
          <Typography
            textAlign="center"
            variant="body2"
            onClick={() =>
              router.push(
                `/chi-tiet-phat-nguoi?lisencePlate=${plateNumber}&carType=${carType?.label}`
              )
            }
            className="hover:cursor-pointer hover:underline"
          >
            Xem chi tiết tại đây
          </Typography>
        </Box>
      ) : isAPIError ? (
        <Box
          sx={{
            color: "black",
          }}
        >
          <Typography
            textAlign="center"
            variant="body1"
            fontWeight="bold"
            className="bg-[var(--disabled-color)]"
          >
            {criminalNotifycation}
          </Typography>
        </Box>
      ) : (
        <Box>
          <Typography textAlign="center" variant="body1" fontWeight="bold">
            {"Phương tiện của bạn đang không có cảnh báo!"}
          </Typography>
        </Box>
      )}
    </Box>
  );

  const validatePlateNumber = (plate) => {
    const regex = /^[0-9A-Z]{6,16}$/i;
    if (!plate) return "Biển số không được để trống";
    if (!regex.test(plate)) return "Biển số không hợp lệ";
    return "";
  };

  const validateSerialNumber = (serial) => {
    const regex = /^([a-zA-Z]{2})+(-(?!-))+([0-9]{7}\b)$/;
    if (!serial) return "Số seri không được để trống";
    if (!regex.test(serial))
      return "Số seri không hợp lệ (định dạng: 2 chữ cái, dấu '-', 7 chữ số, ví dụ: AB-1234567)";
    return "";
  };

  const [searchType, setSearchType] = useState(SearchType.toan_dien);
  const [carType, setCarType] = useState(VehicleTypes.oto);
  const [plateNumber, setPlateNumber] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isVehicleWarning, setIsVehicleWarning] = useState(false);
  const [isLookup, setIsLookup] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSearchTypeChange = (value) => {
    setIsAPIErrors(false);
    setIsLookup(false);
    setSearchType(value);
  };

  const handleCarTypeChange = (value) => {
    setCarType(value);
    if (!value) {
      setErrors((prev) => ({ ...prev, carType: "Bạn cần chọn loại xe!" }));
    } else {
      setErrors((prev) => ({ ...prev, carType: "" }));
    }
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!carType) {
      formErrors.carType = "Bạn cần chọn loại xe!";
      isValid = false;
    }

    const plateError = validatePlateNumber(plateNumber);
    if (plateError) {
      formErrors.plateNumber = plateError;
      isValid = false;
    }

    if (
      (searchType?.value === SearchType.cuc_dang_kiem.value ||
        searchType?.value === SearchType.toan_dien.value) &&
      carType?.value === VehicleTypes["oto"].value
    ) {
      const serialError = validateSerialNumber(serialNumber);
      if (serialError) {
        formErrors.serialNumber = serialError;
        isValid = false;
      }
    }

    return { isValid, formErrors };
  };

  const handleSubmit = async () => {
    const { isValid, formErrors } = validateForm();
    setErrors(formErrors);

    if (!isValid) return;

    setIsLookup(true);
    setIsLoading(true);

    const data = {
      licensePlates: plateNumber,
      certificateSeries: serialNumber,
      vehicleType: carType?.value,
    };

    try {
      const response = await UserService.userCheckCriminal({ data });
      const { data: criminalData } = response;

      if (
        searchType?.value === SearchType.toan_dien.value &&
        criminalData?.hasCriminal === 1
      ) {
        setIsVehicleWarning(true);
        setCriminalNotyfication(criminalData?.notification);
      } else if (
        searchType?.value === SearchType.cuc_dang_kiem.value &&
        criminalData?.isCriminalVR === 1
      ) {
        setIsVehicleWarning(true);
        setCriminalNotyfication(criminalData?.notificationVR);
      } else if (
        searchType?.value === SearchType.cuc_csgt.value &&
        criminalData?.isCriminalCSGT === 1
      ) {
        setIsVehicleWarning(true);
        setCriminalNotyfication(criminalData?.notificationCSGT);
      } else {
        setIsVehicleWarning(false);
      }
      setLinkSearch(() => {
        if (criminalData?.isCriminalVR === 1) {
          return SearchType.cuc_dang_kiem.link;
        }
        if (criminalData?.isCriminalCSGT === 1) {
          return SearchType.cuc_csgt.link;
        }
      });
    } catch (error) {
      setIsVehicleWarning(false);
      setCriminalNotyfication(
        ERROR_MESSAGES[error?.error]?.message ||
          "Có lỗi xảy ra, vui lòng thử lại sau!"
      );
      setIsAPIErrors(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        mb: 4,
        borderRadius: 2,
        border: "1px solid #e0e0e0",
      }}
    >
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
        Tra Cứu Phạt Nguội Toàn Quốc
      </Typography>
      <Box sx={{ maxWidth: 500, mx: "auto", overflow: "hidden" }}>
        {/* Loại Tra cứu */}
        <FormControl fullWidth margin="normal">
          <Autocomplete
            disableClearable={true}
            value={searchType}
            options={Object.values(SearchType)}
            sx={{ width: "100%" }}
            renderInput={(params) => (
              <TextField {...params} label="Loại tra cứu" />
            )}
            onChange={(_, newValue) => {
              setSerialNumber("");
              handleSearchTypeChange(newValue);
            }}
          />
        </FormControl>

        {/* Chọn loại xe */}
        <FormControl fullWidth margin="normal" error={!!errors.carType}>
          <Autocomplete
            disableClearable={true}
            value={carType}
            options={Object.values(VehicleTypes)}
            sx={{ width: "100%" }}
            onChange={(_, newValue) => {
              handleCarTypeChange(newValue);
              setIsLookup(false);
              setIsAPIErrors(false);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Chọn loại xe" />
            )}
          />
          <FormHelperText>{errors.carType}</FormHelperText>
        </FormControl>

        {/* Biển số xe */}
        <TextField
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          fullWidth
          label="Biển số xe"
          placeholder="29A12345"
          value={plateNumber}
          onChange={(e) => {
            setIsLookup(false);
            setIsAPIErrors(false);
            const value = e.target.value.toUpperCase();
            setPlateNumber(value);
            const error = validatePlateNumber(value);
            setErrors((prev) => ({ ...prev, plateNumber: error }));
          }}
          margin="normal"
          error={!!errors.plateNumber}
          helperText={errors.plateNumber}
        />

        {/* Số seri tem */}
        {(searchType?.value === SearchType.cuc_dang_kiem.value ||
          searchType?.value === SearchType.toan_dien.value) &&
          carType?.value === VehicleTypes["oto"].value && (
            <>
              <TextField
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit();
                  }
                }}
                fullWidth
                label="Số seri tem"
                value={serialNumber}
                placeholder="AA-1234567"
                onChange={(e) => {
                  setIsLookup(false);
                  setIsAPIErrors(false);
                  const value = e.target.value.toUpperCase();
                  setSerialNumber(value);
                  const error = validateSerialNumber(value);
                  setErrors((prev) => ({ ...prev, serialNumber: error }));
                }}
                margin="normal"
                error={!!errors.serialNumber}
                helperText={errors.serialNumber}
              />
              <Box>
                <Button
                  className="!text-[var(--primary-color)]"
                  onClick={() => setOpen(true)}
                >
                  Cách xem số seri
                </Button>

                <SerialGuideDialog open={open} onClose={() => setOpen(false)} />
              </Box>
            </>
          )}

        {/* Button Action */}
        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "center",
            display: "flex",
            gap: 2,
            flexWrap: { xs: "wrap", sm: "nowrap" },
          }}
        >
          <Button
            onClick={handleSubmit}
            variant="contained"
            className="!bg-[var(--primary-color)]"
            sx={{
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Tra Cứu
          </Button>
          <Button
            onClick={() => {
              const url =
                `${process.env.NEXT_PUBLIC_AFFILIATE_WEB_URL}/AppSharing/TraCuuPhatNguoi?appuserid=873523`;
              window.open(url, "_blank");
            }}
            variant="contained"
            className="!bg-[var(--primary-color)]"
            sx={{
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Nhận thông báo phạt nguội
          </Button>
        </Box>

        {/* Kết quả */}
        {isLookup && (
          <>
            {!isLoading && (
              <Typography sx={{ mt: 2, textAlign: "center" }}>
                <Link
                  href={linkSearch}
                  target="_blank"
                  className="!text-[var(--primary-color)]"
                >
                  Nguồn dữ liệu tham khảo tại {linkSearch}
                </Link>
              </Typography>
            )}

            <Box sx={{ mt: 4 }}>
              {isLoading ? (
                <LoadingSpinner text="Đang tải..." />
              ) : (
                <ResultSearchViolation
                  hasWarning={isVehicleWarning}
                  notifycation={criminalNotifycation}
                />
              )}
            </Box>
          </>
        )}
      </Box>
    </Paper>
  );
}
