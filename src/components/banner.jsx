import Image from "next/image";
import { Box } from "@mui/material";
import Link from "next/link";

export default function Banner() {
  return (
    <Box
      sx={{
        px: {sm: 0 },
        mb: 4,
        textAlign: "center", // Để ảnh ở giữa
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1200, // tùy theo kích thước tối đa bạn muốn
          mx: "auto", // căn giữa
        }}
      >
        <Link
          href={
            `${process.env.NEXT_PUBLIC_AFFILIATE_WEB_URL}/AppSharing/TraCuuPhatNguoi?appuserid=873523`
          }
          target="_blank"
        >
          <Image
            src="/phatnguoibanner.jpg"
            alt="Banner"
            width={1200} // đúng tỷ lệ của ảnh gốc
            height={400} // đúng tỷ lệ của ảnh gốc
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              borderRadius: 8,
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
            priority
          />
        </Link>
      </Box>
    </Box>
  );
}
