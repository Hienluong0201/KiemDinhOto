import {
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import companyInfo from "@/constants/companyInfo";

export default function FAQ() {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 3,
        mb: 4,
        borderRadius: 2,
        border: "1px solid #e0e0e0",
      }}
    >
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        Câu hỏi thường gặp (FAQ)
      </Typography>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontWeight="medium">
            #1 {process.env.NEXT_PUBLIC_DOMAIN} là gì?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong className="!text-[var(--primary-color)]">
              {process.env.NEXT_PUBLIC_DOMAIN}
            </strong>{" "}
            là trang web / công cụ giúp mọi người dễ dàng kiểm tra phạt nguội ô
            tô trực tuyến miễn phí.
          </Typography>
          <Typography>
            Nguồn dữ liệu được chúng tôi lấy từ Cổng thông tin điện tử Cục Cảnh
            sát giao thông (csgt.vn) và Cục Đăng Kiểm và được update liên tục
            theo từng tháng nên các bạn yên tâm về độ uy tín và chính xác.
          </Typography>
          <Typography>
            Bên cạnh đó, trên trang web kiểm tra phạt nguội{" "}
            <strong className="!text-[var(--primary-color)]">
              {process.env.NEXT_PUBLIC_DOMAIN}
            </strong>{" "}
            bạn còn có thể tra cứu các mức phạt khi vi phạm lỗi, các lỗi vi phạm
            phổ biến từ đó có thể chủ động hơn trong việc tham gia giao thông.
            Đây là điều mà bạn khó tìm thấy trên các website khác
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography fontWeight="medium">
            #2 Quy trình nộp phạt nguội như thế nào?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontWeight={"bold"} gutterBottom>
            Về quy trình phạt nguội, bạn có thể hình dung theo các bước dưới
            đây:
          </Typography>
          <Box component="ul" sx={{ pl: 3, listStyleType: "disc" }}>
            {[
              "Bước 1: Thu thập hình ảnh vi phạm (từ phương tiện, thiết bị kỹ thuật nghiệp vụ hoặc từ tổ chức, cá nhân cung cấp...)",
              "Bước 2: Trích xuất hình ảnh.",
              "Bước 3: Lập hồ sơ vi phạm, in thông báo.",
              "Bước 4: Phát hành thông báo cho chủ phương tiện.",
              "Bước 5: Phối hợp với chủ phương tiện giải quyết vụ việc vi phạm.",
              "Bước 6: Cập nhật kết quả xử lý và kết thúc hồ sơ.",
            ].map((item, index) => (
              <Box component="li" key={index} sx={{ mb: 1 }}>
                <Typography>{item}</Typography>
              </Box>
            ))}
          </Box>

          <Box mt={4}>
            <Typography fontWeight={"bold"} gutterBottom>
              Tại bước 5 người vi phạm/chủ phương tiện cần lưu ý những điều sau
              khi đến trụ sở CSGT phối hợp giải quyết vụ việc:
            </Typography>
            <Box component="ul" sx={{ pl: 3, listStyleType: "disc" }}>
              {[
                "Một là, người vi phạm/chủ phương tiện cần mang theo các loại giấy tờ gồm: Thông báo vi phạm; giấy tờ liên quan đến phương tiện và người điều khiển phương tiện vi phạm.",
                "Hai là, nộp các giấy tờ liên quan cho cán bộ tiếp dân và đợi gọi tên theo thứ tự.",
                "Ba là, cán bộ tiếp dân cho người vi phạm xem lại hình ảnh phương tiện vi phạm, người vi phạm xác nhận đúng lỗi. Cán bộ CSGT lập biên bản vi phạm và ra quyết định xử phạt.",
                "Bốn là, người vi phạm nhận quyết định xử phạt và đến địa điểm nộp phạt tại Kho bạc nhà nước hoặc ngân hàng thương mại nơi Kho bạc nhà nước ủy nhiệm thu tiền phạt ghi trong quyết định xử phạt (hoặc nộp qua bưu điện thu hộ).",
                "Năm là, sau khi nộp phạt, người vi phạm nộp Biên lai cho cán bộ tiếp dân và nhận lại giấy tờ bị tạm giữ.",
              ].map((item, index) => (
                <Box component="li" key={index} sx={{ mb: 1 }}>
                  <Typography>{item}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography fontWeight="medium">
            #3 Tôi kiểm tra phạt nguội và thấy có lỗi, nếu tôi không nộp phạt
            thì sao?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display={"flex"} flexDirection="column" gap={2}>
            <Typography>
              Theo quy định tại Khoản 12 Điều 80 Nghị định 100/NĐ-CP ngày
              29/12/2020 của Thủ tướng Chính phủ, nếu chủ phương tiện không đến
              phối hợp giải quyết vụ việc vi phạm theo thông báo của Phòng CSGT
              ĐB-ĐS, thì Phòng CSGT ĐB-ĐS sẽ gửi thông báo cho cơ quan đăng kiểm
              để đưa vào cảnh báo phương tiện liên quan đến vi phạm hành chính
              trên Chương trình Quản lý kiểm định.
            </Typography>
            <Typography>
              Khi phương tiện đến kiểm định, cơ quan đăng kiểm thông báo cho
              người đưa phương tiện đến kiểm định biết về việc vi phạm, thực
              hiện kiểm định theo quy định đối với phương tiện, cấp Giấy chứng
              nhận kiểm định và tem kiểm định an toàn kỹ thuật và bảo vệ môi
              trường có thời hạn hiệu lực là 15 ngày.
            </Typography>
            <Typography>
              Sau khi người vi phạm đã đến trụ sở của người có thẩm quyền xử
              phạt để giải quyết vụ việc vi phạm theo quy định, người có thẩm
              quyền xử phạt phải gửi thông báo ngay cho cơ quan đăng kiểm biết
              để xóa cảnh báo phương tiện liên quan đến vi phạm hành chính trên
              Chương trình Quản lý kiểm định, thực hiện kiểm định, cấp Giấy
              chứng nhận kiểm định và tem kiểm định an toàn kỹ thuật và bảo vệ
              môi trường theo quy định hiện hành đối với phương tiện.
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography fontWeight="medium">
            #4 Cách nộp phạt nguội nhanh nhất là gì?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Chúng ta có mấy cách nộp phạt nguội nhanh chóng như sau
          </Typography>
          {/* 1. Nộp phạt tại CSGT */}
          <Typography fontWeight={"bold"} gutterBottom>
            1. Nộp phạt tại chỗ cho CSGT
          </Typography>
          <Typography paragraph>
            Nộp phạt tại chỗ là hình thức nộp phạt thuận tiện, nhanh chóng và
            đơn giản nhất đối với các lỗi vi phạm giao thông đường bộ mà nhiều
            chủ phương tiện lựa chọn.
          </Typography>

          {/* 2. Chuyển khoản Kho bạc */}
          <Typography fontWeight={"bold"} gutterBottom>
            2. Nộp phạt thông qua chuyển khoản cho kho bạc nhà nước
          </Typography>
          <Typography paragraph>
            Trong vòng 10 ngày kể từ ngày nhận quyết định xử phạt, cá nhân hoặc
            tổ chức vi phạm phải nộp tiền tại Kho bạc nhà nước hoặc nộp chuyển
            khoản vào tài khoản Kho bạc Nhà nước. Thông tin chuyển khoản được
            ghi rõ trong biên bản vi phạm giao thông.
          </Typography>
          <Typography paragraph>
            Nếu quá thời hạn 10 ngày mà cá nhân/ tổ chức không nộp phạt thì sẽ
            bị cưỡng chế thi hành quyết định xử phạt. Cứ mỗi một ngày chậm nộp
            phạt, cá nhân/tổ chức đó phải chịu mức lãi suất trả chậm là 0,05%
            tổng số tiền phạt phải nộp.
          </Typography>

          {/* 3. Ngân hàng */}
          <Typography fontWeight={"bold"} gutterBottom>
            3. Nộp phạt thông qua ngân hàng
          </Typography>
          <Typography paragraph>
            Nghị định 11/2020/NĐ-CP có quy định về thủ tục hành chính, hướng dẫn
            người dân nộp phạt vào ngân sách nhà nước theo phương thức điện tử.
            Nếu thực hiện nộp phạt vi phạm giao thông theo cách này, cá nhân/tổ
            chức cần làm theo các bước sau:
          </Typography>

          <Box component="ul" sx={{ pl: 3, listStyleType: "disc" }}>
            {[
              "Bước 1: Đến trụ sở giao dịch của ngân hàng hoặc đăng nhập vào hệ thống thanh toán điện tử ngân hàng mà cá nhân/tổ chức đang sử dụng (Mobile Banking, Internet Banking hoặc bất cứ hình thức thanh toán điện tử tương ứng nào của ngân hàng)",
              "Bước 2: Ngân hàng sẽ lập chứng từ để nộp tiền phạt của bạn vào ngân sách nhà nước.",
              "Bước 3: Ngân hàng tiến hành kiểm tra thông tin tài khoản và điều kiện trích nợ tài khoản.",
            ].map((item, i) => (
              <Box component="li" key={i} sx={{ mb: 1 }}>
                <Typography>{item}</Typography>
              </Box>
            ))}
            <Box component="li" sx={{ listStyleType: '"- "', mb: 1 }}>
              Nếu kiểm tra phù hợp thì ngân hàng sẽ làm thủ tục chuyển tiền vào
              tài khoản của Kho bạc Nhà nước đầy đủ và kịp thời.
            </Box>
            <Box component="li" sx={{ listStyleType: '"- "' }}>
              Nếu kiểm tra không phù hợp, ngân hàng sẽ gửi thông báo chưa thực
              hiện thành công giao dịch cho người thực hiện thanh toán để thực
              hiện lại các bước.
            </Box>
          </Box>

          {/* 4. Bưu điện */}
          <Typography fontWeight={"bold"} gutterBottom>
            4. Nộp phạt thông qua bưu điện
          </Typography>
          <Typography paragraph>
            Thỏa thuận số 69/TTHT-C67-BĐVN giữa Cục Cảnh sát giao thông và Tổng
            công ty Bưu điện Việt Nam có hướng dẫn cá nhân/tổ chức vi phạm nộp
            phạt qua bưu điện như sau:
          </Typography>
          <Box component="ul" sx={{ pl: 3, listStyleType: "disc" }}>
            {[
              "Sau khi đã đăng ký với lực lượng cảnh sát giao thông về việc nộp phạt qua bưu điện, cá nhân/tổ chức vi phạm phải đến bưu điện gần nhất để nộp tiền.",
              "Cá nhân/tổ chức vi phạm sẽ nhận lại số giấy tờ bị tạm giữ bởi cảnh sát giao thông trong vòng 2 ngày (nếu ở trung tâm thành phố) hoặc từ 3 – 5 ngày (nếu ở huyện và các tỉnh lân cận). Trường hợp giấy tờ tạm giữ bị thất lạc trong quá trình vận chuyển, bưu điện và cơ quan liên quan sẽ phối hợp để cấp lại cho người vi phạm (miễn phí).",
            ].map((item, i) => (
              <Box component="li" key={i} sx={{ mb: 1 }}>
                <Typography>{item}</Typography>
              </Box>
            ))}
          </Box>

          {/* 5. Online qua cổng dịch vụ công */}
          <Typography fontWeight={"bold"} gutterBottom>
            5. Nộp phạt theo hình thức online tại cổng dịch vụ công quốc gia
          </Typography>
          <Typography paragraph>
            Sau khi kiểm tra phạt nguội và có thông báo vi phạm thì các bước
            thực hiện việc nộp phạt nguội vi phạm giao thông qua cổng dịch vụ
            công quốc gia như sau:
          </Typography>

          <Box component="ul" sx={{ pl: 3, listStyleType: "disc" }}>
            {[
              "Bước 1: Truy cập https://dichvucong.gov.vn/home/dvc-trang-chu.html, chọn vào mục “Thanh toán trực tuyến”.",
              "Bước 2: Chọn “Nộp phạt xử lý vi phạm hành chính” theo cá nhân hoặc doanh nghiệp.",
              "Bước 3: Chọn mục “Tra cứu, thanh toán vi phạm giao thông”.",
              "Bước 4: Có 2 cách để tra cứu nội dung nộp phạt:",
              "- Cách 1: Tra cứu theo mã quyết định xử phạt, ngày ban hành và số điện thoại của cá nhân/tổ chức vi phạm",
              "- Cách 2: Chọn “Tra cứu theo biên bản vi phạm” và nhập các thông tin tương ứng.",
              "Bước 5: Sau khi đã nhập các thông tin đầy đủ theo yêu cầu, người vi phạm chọn hình thức nộp tiền phạt và trả giấy tờ theo đúng hướng dẫn của Cổng dịch vụ công.",
            ].map((item, i) => {
              // Các dòng bắt đầu bằng dấu "-" là mục phụ
              if (item.startsWith("-")) {
                return (
                  <Typography key={i} sx={{ pl: 2, mb: 1 }}>
                    {item}
                  </Typography>
                );
              }

              // Trường hợp chứa link
              if (item.includes("https")) {
                return (
                  <Box component="li" key={i} sx={{ mb: 1 }}>
                    <Typography>
                      Bước 1: Truy cập{" "}
                      <Link
                        href="https://dichvucong.gov.vn/p/home/dvc-trang-chu.html"
                        target="_blank"
                        underline="hover"
                      >
                        https://dichvucong.gov.vn/p/home/dvc-trang-chu.html
                      </Link>
                      , chọn vào mục “Thanh toán trực tuyến”.
                    </Typography>
                  </Box>
                );
              }

              // Các dòng bước chính
              return (
                <Box component="li" key={i} sx={{ mb: 1 }}>
                  <Typography>{item}</Typography>
                </Box>
              );
            })}
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography fontWeight="medium">
            #5 Nếu vi phạm, sau bao lâu thì kiểm tra được kết quả?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display={"flex"} flexDirection="column" gap={2}>
            <Typography paragraph>
              Việc kiểm tra phạt nguội sau thời gian bao lâu hiện chưa được quy
              định cụ thể, bởi điều này phụ thuộc vào việc hành vi vi phạm đó bị
              phát hiện sau bao lâu kể từ lúc thực hiện.
            </Typography>
            <Typography paragraph>
              Có trường hợp sẽ thấy kết quả sau khi vi phạm 2 ngày, nhưng cũng
              có trường hợp lên tới 30 ngày
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography fontWeight="medium">
            #6 Trang web{" "}
            <strong className="!text-[var(--primary-color)]">
               {process.env.NEXT_PUBLIC_DOMAIN}
            </strong>{" "}
            có bán API tra phạt nguội không?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display={"flex"} flexDirection="column" gap={2}>
            <Typography paragraph>
              <strong>Không</strong>. Chúng tôi <strong>không</strong> cung cấp
              hoặc bán API tra cứu phạt nguội. Bạn có thể liên hệ: CSGT.VN,
              PhatNguoi.Com. Hoặc bạn có thể tham khảo Vnetraffic,
              CheckPhatNguoi...
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
}
