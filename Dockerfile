# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

# Copy source code
COPY . .

# Cài dependencies
RUN rm -rf node_modules .next package-lock.json && npm install

#replace "public" folder based on Theme name from REACT_APP_THEME_NAME build arguments of Docker
# Khai báo build arg (mặc định là "default" nếu không truyền)
ARG NEXT_PUBLIC_THEME_NAME=${NEXT_PUBLIC_THEME_NAME}
ENV NEXT_PUBLIC_THEME_NAME=${NEXT_PUBLIC_THEME_NAME}
COPY ./public/${NEXT_PUBLIC_THEME_NAME}/ /usr/src/app/public/

ARG NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

ARG NEXT_PUBLIC_WEB_URL=${NEXT_PUBLIC_WEB_URL}
ENV NEXT_PUBLIC_WEB_URL=${NEXT_PUBLIC_WEB_URL}

ARG PORT=${PORT}
ENV PORT=${PORT}

ARG NEXT_PUBLIC_KEY_PAYLOAD=${NEXT_PUBLIC_KEY_PAYLOAD}
ENV NEXT_PUBLIC_KEY_PAYLOAD=${NEXT_PUBLIC_KEY_PAYLOAD}

ARG NEXT_PUBLIC_ENCRYPT_SECRET_KEY=${NEXT_PUBLIC_ENCRYPT_SECRET_KEY}
ENV NEXT_PUBLIC_ENCRYPT_SECRET_KEY=${NEXT_PUBLIC_ENCRYPT_SECRET_KEY}

ARG NEXT_PUBLIC_WEB_TTDK_URL=${NEXT_PUBLIC_WEB_TTDK_URL}
ENV NEXT_PUBLIC_WEB_TTDK_URL=${NEXT_PUBLIC_WEB_TTDK_URL}

ARG NEXT_PUBLIC_PROJECT_NAME=${NEXT_PUBLIC_PROJECT_NAME}
ENV NEXT_PUBLIC_PROJECT_NAME=${NEXT_PUBLIC_PROJECT_NAME}

ARG NEXT_PUBLIC_PROJECT_NAME=${NEXT_PUBLIC_AFFILIATE_WEB_URL}
ENV NEXT_PUBLIC_PROJECT_NAME=${NEXT_PUBLIC_AFFILIATE_WEB_URL}

ARG NEXT_PUBLIC_DOMAIN=${NEXT_PUBLIC_DOMAIN}
ENV NEXT_PUBLIC_DOMAIN=${NEXT_PUBLIC_DOMAIN}

# Build Next.js
RUN npm run build

# Stage 2: Run app in production
FROM node:20-alpine

WORKDIR /usr/src/app

# Copy app from builder
COPY --from=builder /usr/src/app ./

# Nếu bạn sử dụng .env.production hoặc biến môi trường, bạn có thể copy thêm ở đây nếu cần

# Cài đặt lại các dependencies production-only (tùy chọn)

EXPOSE 80

CMD ["npx", "next", "start", "-p", "80"]
