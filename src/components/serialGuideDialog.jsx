// components/SerialGuideDialog.jsx
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import Image from "next/image";

export default function SerialGuideDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle fontWeight={"bold"}>Cách lấy số seri tem GCN</DialogTitle>
      <DialogContent>
        <Typography mb={2}>
          Về 'Số tem (seri), giấy chứng nhận hiện tại', người tra cứu cần căn cứ
          theo số kiểm định được dán góc trên bên phải của mặt kính chắn gió
          phía trước xe.
        </Typography>

        <Box sx={{ p: 2, mb: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Ví dụ về số tem (seri), giấy chứng nhận hiện tại của hình bên dưới
            là: <span style={{ color: "red" }}>KD-1946305</span>
          </Typography>

          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: 200,
              mb: 2,
            }}
          >
            <Image
              src="/serial-1.png" // tên ảnh bạn đã upload
              alt="Serial example"
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Box>
        <Typography mb={1} gutterBottom>
          Hoặc là dòng cuối cùng trên sổ đăng kiểm.
        </Typography>
        <Box sx={{ p: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
          <Typography mb={1} fontWeight="bold">
            Là dòng cuối cùng 'Số seri' trên giấy chứng nhận
          </Typography>

          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: 160,
              mb: 2,
            }}
          >
            <Image
              src="/serial-2.png" // tên ảnh bạn đã upload
              alt="Serial from certificate"
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Box>
      </DialogContent>
      <Button
        variant="contained"
        className="!bg-[var(--primary-color)]"
        onClick={onClose}
        sx={{ margin: 2 }}
      >
        Đóng
      </Button>
    </Dialog>
  );
}
