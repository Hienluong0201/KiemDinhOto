"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import { checkIsEmbedded } from "@/utils/isEmbeddedView";

export default function Navigation() {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isEmbeddedView, setIsEmbeddedView] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsEmbeddedView(checkIsEmbedded(window.location.href));
    }
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#262fed",
        width: "100%",
        py: 1,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo / Tiêu đề bên trái */}
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          {isEmbeddedView ? (
            <IconButton
              onClick={() => router.back()}
              sx={{
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <ArrowBackIcon fontSize="small" />
              <Typography variant="body2" sx={{ color: "white" }}>
                TRA CỨU PHẠT NGUỘI
              </Typography>
            </IconButton>
          ) : (
            <Box
              onClick={() => router.push("/tra-cuu")}
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: { xs: "0.95rem", sm: "1.1rem" },
                cursor: "pointer",
              }}
            >
              TRA CỨU PHẠT NGUỘI
            </Box>
          )}
        </Box>

        {/* Menu mobile */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="menu"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            PaperProps={{
              sx: {
                width: "90vw",
                maxWidth: 300,
              },
            }}
          >
            {/* MenuItem: Tra cứu phạt nguội */}
            <MenuItem
              onClick={handleCloseNavMenu}
              component={Link}
              href="/tra-cuu"
            >
              <Typography textAlign="center">Tra cứu phạt nguội</Typography>
            </MenuItem>

            {/* MenuItem: Bản đồ vi phạm */}
            <MenuItem
              onClick={handleCloseNavMenu}
              component={Link}
              href="/ban-do-vi-pham"
            >
              <Typography textAlign="center">Bản đồ vi phạm</Typography>
            </MenuItem>

            {/* MenuItem: Giới thiệu */}
            <MenuItem
              onClick={handleCloseNavMenu}
              component={Link}
              href="/gioi-thieu"
            >
              <Typography textAlign="center">Giới Thiệu</Typography>
            </MenuItem>

            {/* MenuItem: Liên hệ */}
            <MenuItem
              onClick={handleCloseNavMenu}
              component={Link}
              href="/lien-he"
            >
              <Typography textAlign="center">Liên Hệ</Typography>
            </MenuItem>
          </Menu>
        </Box>

        {/* Menu desktop */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <Button color="inherit" component={Link} href="/tra-cuu">
            Tra cứu phạt nguội
          </Button>
          <Button color="inherit" component={Link} href="/ban-do-vi-pham">
            Bản đồ vi phạm
          </Button>
          <Button color="inherit" component={Link} href="/gioi-thieu">
            Giới Thiệu
          </Button>
          <Button color="inherit" component={Link} href="/lien-he">
            Liên Hệ
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
