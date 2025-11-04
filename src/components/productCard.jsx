import { Card, CardHeader, Box, CardContent, Typography } from "@mui/material";
import {
  AttachMoney as AttachMoneyIcon,
  AccessTime as AccessTimeIcon,
} from "@mui/icons-material";
const ProductCard = ({ pkg, handlePackageSelect, selectedPackages, type }) => {
  return (
    <Card
      sx={{
        width: 150,
        maxWidth: 150,
        cursor: "pointer",
        border:
          selectedPackages?.[type]?.productId === pkg.productId
            ? `var(--primary-color) solid 2px`
            : "",
        borderRadius: 2,
        flexShrink: 0, // không co lại khi scroll
        mx: 1, // margin ngang giữa các card
      }}
      onClick={() => handlePackageSelect(pkg, type)}
    >
      <CardHeader
        title={pkg.productName}
        sx={{
          bgcolor: "primary.main",
          color: "white",
          p: 1.5,
          textAlign: "center",
        }}
      />
      <CardContent sx={{ p: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <AccessTimeIcon sx={{ color: "primary.main", mr: 1, fontSize: 20 }} />
          <Typography variant="body2">{pkg.usageDate} Ngày</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <AttachMoneyIcon
            sx={{ color: "primary.main", mr: 1, fontSize: 20 }}
          />
          <Typography variant="body2">
            {pkg.productPrice?.toLocaleString()}đ
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
