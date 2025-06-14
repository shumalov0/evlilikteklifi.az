import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface AdditionalService {
  name: string;
  price: number;
  description: string;
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const {
      to,
      subject,
      name,
      phone,
      email,
      date,
      time,
      message,
      package: selectedPackage,
      additionalServices,
      totalPrice
    } = data

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Email configuration is missing')
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to || 'evlilikteklifi.az@gmail.com',
      subject: subject || 'Yeni Müraciət',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #b45309; margin-bottom: 20px;">Yeni Evlilik Təklifi Müraciəti</h2>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #44403c; margin-bottom: 10px;">Müştəri Məlumatları</h3>
            <p><strong>Ad Soyad:</strong> ${name}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${date ? `<p><strong>Tarix:</strong> ${date}</p>` : ''}
            ${time ? `<p><strong>Saat:</strong> ${time}</p>` : ''}
          </div>

          ${selectedPackage ? `
            <div style="margin-bottom: 20px;">
              <h3 style="color: #44403c; margin-bottom: 10px;">Seçilmiş Paket</h3>
              <div style="background-color: #fafaf9; padding: 15px; border-radius: 6px;">
                <p><strong>Paket:</strong> ${selectedPackage.name}</p>
                <p><strong>Qiymət:</strong> ${selectedPackage.price} AZN</p>
                <p><strong>Təsvir:</strong> ${selectedPackage.description}</p>
                <p><strong>Məkan:</strong> ${selectedPackage.location}</p>
              </div>
            </div>
          ` : ''}

          ${additionalServices && additionalServices.length > 0 ? `
            <div style="margin-bottom: 20px;">
              <h3 style="color: #44403c; margin-bottom: 10px;">Əlavə Xidmətlər</h3>
              <div style="background-color: #fafaf9; padding: 15px; border-radius: 6px;">
                ${additionalServices.map((service: AdditionalService) => `
                  <div style="margin-bottom: 10px;">
                    <p><strong>Xidmət:</strong> ${service.name}</p>
                    <p><strong>Qiymət:</strong> ${service.price} AZN</p>
                    <p><strong>Təsvir:</strong> ${service.description}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <div style="margin-bottom: 20px;">
            <h3 style="color: #44403c; margin-bottom: 10px;">Əlavə Qeydlər</h3>
            <div style="background-color: #fafaf9; padding: 15px; border-radius: 6px;">
              <p>${message || "Qeyd yoxdur"}</p>
            </div>
          </div>

          ${totalPrice ? `
            <div style="margin-top: 20px; padding: 15px; background-color: #fef3c7; border-radius: 6px;">
              <h3 style="color: #b45309; margin: 0;">Ümumi Məbləğ: ${totalPrice} AZN</h3>
            </div>
          ` : ''}

          <div style="margin-top: 20px; font-size: 12px; color: #78716c;">
            <p>Bu email ${new Date().toLocaleString('az-AZ')} tarixində göndərilib.</p>
          </div>
        </div>
      `
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
} 