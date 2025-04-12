import { IEmailTemplateParams, IEmailContent } from "@/interfaces"

export const emailTemplate = (params: IEmailTemplateParams): IEmailContent => {
  const {
    projectName,
    projectUrl,
    projectLogoUrl,
    recipientName = 'Bạn',
    otpCode,
    expiresInMinutes,
    supportEmail,
    footerText = `© ${new Date().getFullYear()} ${projectName}. All rights reserved.`,
  } = params;

  const subject = `[${projectName}] Mã OTP xác thực tài khoản`;

  const text = `
    Xin chào ${recipientName},

    Bạn (hoặc ai đó) vừa yêu cầu mã OTP để xác thực tài khoản trên ${projectName}.
    Mã OTP của bạn là: ${otpCode}

    Mã này sẽ hết hạn sau ${expiresInMinutes} phút.

    Nếu bạn không yêu cầu mã này, vui lòng bỏ qua email này.

    Hỗ trợ: ${supportEmail}
    Trang chủ: ${projectUrl}

    ${footerText}
  `;

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333;">
      <div style="text-align:center;padding:20px 0;">
        ${
          projectLogoUrl
            ? `<a href="${projectUrl}" target="_blank"><img src="${projectLogoUrl}" alt="${projectName}" style="max-height:60px;" /></a>`
            : `<h1 style="margin:0;font-size:1.5rem;">${projectName}</h1>`
        }
      </div>
      <div style="background:#fafafa;padding:30px;border-radius:8px;border:1px solid #eee;">
        <p>Xin chào <strong>${recipientName}</strong>,</p>
        <p>Bạn (hoặc ai đó) vừa yêu cầu mã OTP để xác thực tài khoản trên <strong>${projectName}</strong>.</p>
        <div style="text-align:center;margin:30px 0;">
          <span style="
            display:inline-block;
            font-size:2rem;
            font-weight:bold;
            letter-spacing:0.2rem;
            padding:15px 25px;
            background:#fff;
            border:2px dashed #ccc;
            border-radius:8px;
          ">
            ${otpCode}
          </span>
        </div>
        <p>Mã này sẽ hết hạn sau <strong>${expiresInMinutes} phút</strong>.</p>
        <p>Nếu bạn không yêu cầu mã này, vui lòng bỏ qua email này.</p>
        <p>Hỗ trợ: <a href="mailto:${supportEmail}">${supportEmail}</a></p>
        <hr style="border:none;border-top:1px solid #eee;margin:30px 0;" />
        <p style="font-size:0.9rem;color:#666;">
          Truy cập <a href="${projectUrl}" target="_blank">${projectName}</a> để biết thêm chi tiết.
        </p>
      </div>
      <div style="text-align:center;font-size:0.8rem;color:#999;padding:20px 0;">
        <p>${footerText}</p>
      </div>
    </div>
  `;

  return { subject, text, html };
}