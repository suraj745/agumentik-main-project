import nc from "next-connect";
import nodemailer from "nodemailer";
const handler = nc();

handler.post(async (req, res) => {
  console.log(req.body);
  const {
    name,
    email,
    phoneNumber,
    services,
    how_you_find_us,
    message,
    subject,
    address,
    project,
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: `${process.env.MY_MAIL}`,
    subject: "Sending email using Nodemailer",
    text: message,
    // html: `<p>This email is send by<strong>${name}</strong></p> <br/>
    // email:${email} <br/>
    // phone:${phoneNumber} <br/>
    // services:${services} <br/>
    // how you find us ?
    // ${how_you_find_us}<br/>
    // message:${message}`,

    html: subject
      ? `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
    >
      <head>
        <!--[if gte mso 9]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG />
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
        <![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="x-apple-disable-message-reformatting" />
        <!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!--<![endif]-->
        <title></title>
    
        <style type="text/css">
          @media only screen and (min-width: 620px) {
            .u-row {
              width: 600px !important;
            }
            .u-row .u-col {
              vertical-align: top;
            }
    
            .u-row .u-col-100 {
              width: 600px !important;
            }
          }
    
          @media (max-width: 620px) {
            .u-row-container {
              max-width: 100% !important;
              padding-left: 0px !important;
              padding-right: 0px !important;
            }
            .u-row .u-col {
              min-width: 320px !important;
              max-width: 100% !important;
              display: block !important;
            }
            .u-row {
              width: calc(100% - 40px) !important;
            }
            .u-col {
              width: 100% !important;
            }
            .u-col > div {
              margin: 0 auto;
            }
          }
          body {
            margin: 0;
            padding: 0;
          }
    
          table,
          tr,
          td {
            vertical-align: top;
            border-collapse: collapse;
          }
    
          p {
            margin: 0;
          }
    
          .ie-container table,
          .mso-container table {
            table-layout: fixed;
          }
    
          * {
            line-height: inherit;
          }
    
          a[x-apple-data-detectors="true"] {
            color: inherit !important;
            text-decoration: none !important;
          }
    
          table,
          td {
            color: #000000;
          }
          #u_body a {
            color: #0000ee;
            text-decoration: underline;
          }
          @media (max-width: 480px) {
            #u_row_10 .v-row-background-image--inner {
              background-position: center top !important;
              background-repeat: no-repeat !important;
            }
            #u_row_10 .v-row-background-image--outer {
              background-image: url("images/image-2.jpeg") !important;
              background-position: center top !important;
              background-repeat: no-repeat !important;
            }
            #u_row_10.v-row-background-image--outer {
              background-image: url("images/image-2.jpeg") !important;
              background-position: center top !important;
              background-repeat: no-repeat !important;
            }
            #u_content_text_15 .v-container-padding-padding {
              padding: 10px !important;
            }
            #u_content_text_15 .v-text-align {
              text-align: left !important;
            }
          }
        </style>
    
        <!--[if !mso]><!-->
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        <!--<![endif]-->
      </head>
    
      <body
        class="clean-body u_body"
        style="
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          background-color: #e7e7e7;
          color: #000000;
        "
      >
        <!--[if IE]><div class="ie-container"><![endif]-->
        <!--[if mso]><div class="mso-container"><![endif]-->
        <table
          id="u_body"
          style="
            border-collapse: collapse;
            table-layout: fixed;
            border-spacing: 0;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            vertical-align: top;
            min-width: 320px;
            margin: 0 auto;
            background-color: #e7e7e7;
            width: 100%;
          "
          cellpadding="0"
          cellspacing="0"
        >
          <tbody>
            <tr style="vertical-align: top">
              <td
                style="
                  word-break: break-word;
                  border-collapse: collapse !important;
                  vertical-align: top;
                "
              >
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
    
                <div
                  id="u_row_10"
                  class="u-row-container v-row-background-image--outer"
                  style="
                    padding: 0px;
                    background-image: url('images/image-2.jpeg');
                    background-repeat: no-repeat;
                    background-position: center top;
                    background-color: #ffffff;
                  "
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: transparent;
                    "
                  >
                    <div
                      class="v-row-background-image--inner"
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td class="v-row-background-image--outer" style="padding: 0px;background-image: url('images/image-2.jpeg');background-repeat: no-repeat;background-position: center top;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr class="v-row-background-image--inner" style="background-color: transparent;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          style="
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Montserrat', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Montserrat', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <table
                                      width="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                      border="0"
                                    >
                                      <tr>
                                        <td
                                          class="v-text-align"
                                          style="
                                            padding-right: 0px;
                                            padding-left: 0px;
                                          "
                                          align="center"
                                        >
                                          <img
                                            align="center"
                                            border="0"
                                            src="images/image-1.png"
                                            alt=""
                                            title=""
                                            style="
                                              outline: none;
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              clear: both;
                                              display: inline-block !important;
                                              border: none;
                                              height: auto;
                                              float: none;
                                              width: 100%;
                                              max-width: 580px;
                                            "
                                            width="580"
                                          />
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <table
                              id="u_content_text_15"
                              style="font-family: 'Montserrat', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Montserrat', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      class="v-text-align"
                                      style="
                                        line-height: 140%;
                                        text-align: left;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="font-size: 14px; line-height: 140%">
                                        <span
                                          style="
                                            font-family: 'Open Sans', sans-serif;
                                            font-size: 14px;
                                            line-height: 19.6px;
                                          "
                                          >This Email Is Send By  <strong
                                            >${name}</strong
                                          ></span
                                        >
                                      </p>
    
                                      <br />
    
                                      <p style="font-size: 14px; line-height: 140%">
                                        <span
                                          style="
                                            font-family: 'Open Sans', sans-serif;
                                            font-size: 14px;
                                            line-height: 19.6px;
                                          "
                                          >Subject :  <strong
                                            >${subject}</strong
                                          ></span
                                        >
                                      </p>
                                      <p style="font-size: 14px; line-height: 140%">
                                         
                                      </p>
                                      <p style="font-size: 14px; line-height: 140%">
                                        <span
                                          style="
                                            font-family: 'Open Sans', sans-serif;
                                            font-size: 14px;
                                            line-height: 19.6px;
                                          "
                                          >Email :
                                          <a
                                            rel="noopener"
                                            href="${email}"
                                            target="_blank"
                                            >${email}</a
                                          ></span
                                        >
                                      </p>
                                      <p style="font-size: 14px; line-height: 140%">
                                         
                                      </p>
                                      <p style="font-size: 14px; line-height: 140%">
                                        <span
                                          style="
                                            font-family: 'Open Sans', sans-serif;
                                            font-size: 14px;
                                            line-height: 19.6px;
                                          "
                                          >Phone Number :${phoneNumber}</span
                                        >
                                      </p>
    
                                      <br />
                                      <p style="font-size: 14px; line-height: 140%">
                                        <span
                                          style="
                                            font-family: 'Open Sans', sans-serif;
                                            font-size: 14px;
                                            line-height: 19.6px;
                                          "
                                          >Message : ${message}</span
                                        >
                                      </p>
                                      <p style="font-size: 14px; line-height: 140%">
                                         
                                      </p>
                                      <p style="font-size: 14px; line-height: 140%">
                                         
                                      </p>
                                      <p style="font-size: 14px; line-height: 140%">
                                         
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        <!--[if mso]></div><![endif]-->
        <!--[if IE]></div><![endif]-->
      </body>
    </html>
    `
      : address
      ? `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html
        xmlns="http://www.w3.org/1999/xhtml"
        xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office"
      >
        <head>
          <!--[if gte mso 9]>
            <xml>
              <o:OfficeDocumentSettings>
                <o:AllowPNG />
                <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
            </xml>
          <![endif]-->
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="x-apple-disable-message-reformatting" />
          <!--[if !mso]><!-->
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <!--<![endif]-->
          <title></title>
      
          <style type="text/css">
            @media only screen and (min-width: 620px) {
              .u-row {
                width: 600px !important;
              }
              .u-row .u-col {
                vertical-align: top;
              }
      
              .u-row .u-col-100 {
                width: 600px !important;
              }
            }
      
            @media (max-width: 620px) {
              .u-row-container {
                max-width: 100% !important;
                padding-left: 0px !important;
                padding-right: 0px !important;
              }
              .u-row .u-col {
                min-width: 320px !important;
                max-width: 100% !important;
                display: block !important;
              }
              .u-row {
                width: calc(100% - 40px) !important;
              }
              .u-col {
                width: 100% !important;
              }
              .u-col > div {
                margin: 0 auto;
              }
            }
            body {
              margin: 0;
              padding: 0;
            }
      
            table,
            tr,
            td {
              vertical-align: top;
              border-collapse: collapse;
            }
      
            p {
              margin: 0;
            }
      
            .ie-container table,
            .mso-container table {
              table-layout: fixed;
            }
      
            * {
              line-height: inherit;
            }
      
            a[x-apple-data-detectors="true"] {
              color: inherit !important;
              text-decoration: none !important;
            }
      
            table,
            td {
              color: #000000;
            }
            #u_body a {
              color: #0000ee;
              text-decoration: underline;
            }
            @media (max-width: 480px) {
              #u_row_10 .v-row-background-image--inner {
                background-position: center top !important;
                background-repeat: no-repeat !important;
              }
              #u_row_10 .v-row-background-image--outer {
                background-image: url("images/image-2.jpeg") !important;
                background-position: center top !important;
                background-repeat: no-repeat !important;
              }
              #u_row_10.v-row-background-image--outer {
                background-image: url("images/image-2.jpeg") !important;
                background-position: center top !important;
                background-repeat: no-repeat !important;
              }
              #u_content_text_15 .v-container-padding-padding {
                padding: 10px !important;
              }
              #u_content_text_15 .v-text-align {
                text-align: left !important;
              }
            }
          </style>
      
          <!--[if !mso]><!-->
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap"
            rel="stylesheet"
            type="text/css"
          />
          <!--<![endif]-->
        </head>
      
        <body
          class="clean-body u_body"
          style="
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
            background-color: #e7e7e7;
            color: #000000;
          "
        >
          <!--[if IE]><div class="ie-container"><![endif]-->
          <!--[if mso]><div class="mso-container"><![endif]-->
          <table
            id="u_body"
            style="
              border-collapse: collapse;
              table-layout: fixed;
              border-spacing: 0;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              vertical-align: top;
              min-width: 320px;
              margin: 0 auto;
              background-color: #e7e7e7;
              width: 100%;
            "
            cellpadding="0"
            cellspacing="0"
          >
            <tbody>
              <tr style="vertical-align: top">
                <td
                  style="
                    word-break: break-word;
                    border-collapse: collapse !important;
                    vertical-align: top;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
      
                  <div
                    id="u_row_10"
                    class="u-row-container v-row-background-image--outer"
                    style="
                      padding: 0px;
                      background-image: url('images/image-2.jpeg');
                      background-repeat: no-repeat;
                      background-position: center top;
                      background-color: #ffffff;
                    "
                  >
                    <div
                      class="u-row"
                      style="
                        margin: 0 auto;
                        min-width: 320px;
                        max-width: 600px;
                        overflow-wrap: break-word;
                        word-wrap: break-word;
                        word-break: break-word;
                        background-color: transparent;
                      "
                    >
                      <div
                        class="v-row-background-image--inner"
                        style="
                          border-collapse: collapse;
                          display: table;
                          width: 100%;
                          height: 100%;
                          background-color: transparent;
                        "
                      >
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td class="v-row-background-image--outer" style="padding: 0px;background-image: url('images/image-2.jpeg');background-repeat: no-repeat;background-position: center top;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr class="v-row-background-image--inner" style="background-color: transparent;"><![endif]-->
      
                        <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                        <div
                          class="u-col u-col-100"
                          style="
                            max-width: 320px;
                            min-width: 600px;
                            display: table-cell;
                            vertical-align: top;
                          "
                        >
                          <div
                            style="
                              height: 100%;
                              width: 100% !important;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          >
                            <!--[if (!mso)&(!IE)]><!--><div
                              style="
                                height: 100%;
                                padding: 0px;
                                border-top: 0px solid transparent;
                                border-left: 0px solid transparent;
                                border-right: 0px solid transparent;
                                border-bottom: 0px solid transparent;
                                border-radius: 0px;
                                -webkit-border-radius: 0px;
                                -moz-border-radius: 0px;
                              "
                            ><!--<![endif]-->
                              <table
                                style="font-family: 'Montserrat', sans-serif"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="v-container-padding-padding"
                                      style="
                                        overflow-wrap: break-word;
                                        word-break: break-word;
                                        padding: 10px;
                                        font-family: 'Montserrat', sans-serif;
                                      "
                                      align="left"
                                    >
                                      <table
                                        width="100%"
                                        cellpadding="0"
                                        cellspacing="0"
                                        border="0"
                                      >
                                        <tr>
                                          <td
                                            class="v-text-align"
                                            style="
                                              padding-right: 0px;
                                              padding-left: 0px;
                                            "
                                            align="center"
                                          >
                                            <img
                                              align="center"
                                              border="0"
                                              src="images/image-1.png"
                                              alt=""
                                              title=""
                                              style="
                                                outline: none;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                                clear: both;
                                                display: inline-block !important;
                                                border: none;
                                                height: auto;
                                                float: none;
                                                width: 100%;
                                                max-width: 580px;
                                              "
                                              width="580"
                                            />
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
      
                              <table
                                id="u_content_text_15"
                                style="font-family: 'Montserrat', sans-serif"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="v-container-padding-padding"
                                      style="
                                        overflow-wrap: break-word;
                                        word-break: break-word;
                                        padding: 10px;
                                        font-family: 'Montserrat', sans-serif;
                                      "
                                      align="left"
                                    >
                                      <div
                                        class="v-text-align"
                                        style="
                                          line-height: 140%;
                                          text-align: left;
                                          word-wrap: break-word;
                                        "
                                      >
                                        <p style="font-size: 14px; line-height: 140%">
                                          <span
                                            style="
                                              font-family: 'Open Sans', sans-serif;
                                              font-size: 14px;
                                              line-height: 19.6px;
                                            "
                                            >This Email Is Send By  <strong
                                              >${name}</strong
                                            ></span
                                          >
                                        </p>
      
                                        <p style="font-size: 14px; line-height: 140%">
                                           
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                          <span
                                            style="
                                              font-family: 'Open Sans', sans-serif;
                                              font-size: 14px;
                                              line-height: 19.6px;
                                            "
                                            >Email :
                                            <a
                                              rel="noopener"
                                              href="${email}"
                                              target="_blank"
                                              >${email}</a
                                            ></span
                                          >
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                           
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                          <span
                                            style="
                                              font-family: 'Open Sans', sans-serif;
                                              font-size: 14px;
                                              line-height: 19.6px;
                                            "
                                            >Phone Number :${phoneNumber}</span
                                          >
                                        </p>
      
                                        <br />
                                        <p style="font-size: 14px; line-height: 140%">
                                          <span
                                            style="
                                              font-family: 'Open Sans', sans-serif;
                                              font-size: 14px;
                                              line-height: 19.6px;
                                            "
                                            >Address :${address}</span
                                          >
                                        </p>
      
                                        <br />
                                        <p style="font-size: 14px; line-height: 140%">
                                          <span
                                            style="
                                              font-family: 'Open Sans', sans-serif;
                                              font-size: 14px;
                                              line-height: 19.6px;
                                            "
                                            >Message : ${message}</span
                                          >
                                        </p>
      
                                        <p style="font-size: 14px; line-height: 140%">
                                           
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                           
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                           
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
      
                              <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                          </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                      </div>
                    </div>
                  </div>
      
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
          <!--[if mso]></div><![endif]-->
          <!--[if IE]></div><![endif]-->
        </body>
      </html>
      `
      : project
      ? `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html
        xmlns="http://www.w3.org/1999/xhtml"
        xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office"
      >
        <head>
          <!--[if gte mso 9]>
            <xml>
              <o:OfficeDocumentSettings>
                <o:AllowPNG />
                <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
            </xml>
          <![endif]-->
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="x-apple-disable-message-reformatting" />
          <!--[if !mso]><!-->
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <!--<![endif]-->
          <title></title>
      
          <style type="text/css">
            @media only screen and (min-width: 620px) {
              .u-row {
                width: 600px !important;
              }
              .u-row .u-col {
                vertical-align: top;
              }
      
              .u-row .u-col-100 {
                width: 600px !important;
              }
            }
      
            @media (max-width: 620px) {
              .u-row-container {
                max-width: 100% !important;
                padding-left: 0px !important;
                padding-right: 0px !important;
              }
              .u-row .u-col {
                min-width: 320px !important;
                max-width: 100% !important;
                display: block !important;
              }
              .u-row {
                width: calc(100% - 40px) !important;
              }
              .u-col {
                width: 100% !important;
              }
              .u-col > div {
                margin: 0 auto;
              }
            }
            body {
              margin: 0;
              padding: 0;
            }
      
            table,
            tr,
            td {
              vertical-align: top;
              border-collapse: collapse;
            }
      
            p {
              margin: 0;
            }
      
            .ie-container table,
            .mso-container table {
              table-layout: fixed;
            }
      
            * {
              line-height: inherit;
            }
      
            a[x-apple-data-detectors="true"] {
              color: inherit !important;
              text-decoration: none !important;
            }
      
            table,
            td {
              color: #000000;
            }
            #u_body a {
              color: #0000ee;
              text-decoration: underline;
            }
            @media (max-width: 480px) {
              #u_row_10 .v-row-background-image--inner {
                background-position: center top !important;
                background-repeat: no-repeat !important;
              }
              #u_row_10 .v-row-background-image--outer {
                background-image: url("images/image-2.jpeg") !important;
                background-position: center top !important;
                background-repeat: no-repeat !important;
              }
              #u_row_10.v-row-background-image--outer {
                background-image: url("images/image-2.jpeg") !important;
                background-position: center top !important;
                background-repeat: no-repeat !important;
              }
              #u_content_text_15 .v-container-padding-padding {
                padding: 10px !important;
              }
              #u_content_text_15 .v-text-align {
                text-align: left !important;
              }
            }
          </style>
      
          <!--[if !mso]><!-->
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap"
            rel="stylesheet"
            type="text/css"
          />
          <!--<![endif]-->
        </head>
      
        <body
          class="clean-body u_body"
          style="
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
            background-color: #e7e7e7;
            color: #000000;
          "
        >
          <!--[if IE]><div class="ie-container"><![endif]-->
          <!--[if mso]><div class="mso-container"><![endif]-->
          <table
            id="u_body"
            style="
              border-collapse: collapse;
              table-layout: fixed;
              border-spacing: 0;
              vertical-align: top;
              min-width: 320px;
              margin: 0 auto;
              background-color: #e7e7e7;
              width: 100%;
            "
            cellpadding="0"
            cellspacing="0"
          >
            <tbody>
              <tr style="vertical-align: top">
                <td
                  style="
                    word-break: break-word;
                    border-collapse: collapse !important;
                    vertical-align: top;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
      
                  <div
                    id="u_row_10"
                    class="u-row-container v-row-background-image--outer"
                    style="
                      padding: 0px;
                      background-image: url('images/image-2.jpeg');
                      background-repeat: no-repeat;
                      background-position: center top;
                      background-color: #ffffff;
                    "
                  >
                    <div
                      class="u-row"
                      style="
                        margin: 0 auto;
                        min-width: 320px;
                        max-width: 600px;
                        overflow-wrap: break-word;
                        word-wrap: break-word;
                        word-break: break-word;
                        background-color: transparent;
                      "
                    >
                      <div
                        class="v-row-background-image--inner"
                        style="
                          border-collapse: collapse;
                          display: table;
                          width: 100%;
                          height: 100%;
                          background-color: transparent;
                        "
                      >
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td class="v-row-background-image--outer" style="padding: 0px;background-image: url('images/image-2.jpeg');background-repeat: no-repeat;background-position: center top;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr class="v-row-background-image--inner" style="background-color: transparent;"><![endif]-->
      
                        <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                        <div
                          class="u-col u-col-100"
                          style="
                            max-width: 320px;
                            min-width: 600px;
                            display: table-cell;
                            vertical-align: top;
                          "
                        >
                          <div
                            style="
                              height: 100%;
                              width: 100% !important;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          >
                            <!--[if (!mso)&(!IE)]><!--><div
                              style="
                                height: 100%;
                                padding: 0px;
                                border-top: 0px solid transparent;
                                border-left: 0px solid transparent;
                                border-right: 0px solid transparent;
                                border-bottom: 0px solid transparent;
                                border-radius: 0px;
                                -webkit-border-radius: 0px;
                                -moz-border-radius: 0px;
                              "
                            ><!--<![endif]-->
                              <table
                                style="font-family: 'Montserrat', sans-serif"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="v-container-padding-padding"
                                      style="
                                        overflow-wrap: break-word;
                                        word-break: break-word;
                                        padding: 10px;
                                        font-family: 'Montserrat', sans-serif;
                                      "
                                      align="left"
                                    >
                                      <table
                                        width="100%"
                                        cellpadding="0"
                                        cellspacing="0"
                                        border="0"
                                      >
                                        <tr>
                                          <td
                                            class="v-text-align"
                                            style="
                                              padding-right: 0px;
                                              padding-left: 0px;
                                            "
                                            align="center"
                                          >
                                            <img
                                              align="center"
                                              border="0"
                                              src="images/image-1.png"
                                              alt=""
                                              title=""
                                              style="
                                                outline: none;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                                clear: both;
                                                display: inline-block !important;
                                                border: none;
                                                height: auto;
                                                float: none;
                                                width: 100%;
                                                max-width: 580px;
                                              "
                                              width="580"
                                            />
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
      
                              <table
                                id="u_content_text_15"
                                style="font-family: 'Montserrat', sans-serif"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="v-container-padding-padding"
                                      style="
                                        overflow-wrap: break-word;
                                        word-break: break-word;
                                        padding: 10px;
                                        font-family: 'Montserrat', sans-serif;
                                      "
                                      align="left"
                                    >
                                      <div
                                        class="v-text-align"
                                        style="
                                          line-height: 140%;
                                          text-align: left;
                                          word-wrap: break-word;
                                        "
                                      >
                                        <p style="font-size: 14px; line-height: 140%">
                                           
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                          <span
                                            style="
                                              font-family: 'Open Sans', sans-serif;
                                              font-size: 14px;
                                              line-height: 19.6px;
                                            "
                                            >Project Name : 3939393993</span
                                          >
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                           
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                          <span
                                            style="
                                              font-family: 'Open Sans', sans-serif;
                                              font-size: 14px;
                                              line-height: 19.6px;
                                            "
                                            >Phone Number : CSR</span
                                          >
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                           
                                        </p>
      
                                        <p style="font-size: 14px; line-height: 140%">
                                           
                                        </p>
      
                                        <p style="font-size: 14px; line-height: 140%">
                                           
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                           
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                           
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
      
                              <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                          </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                      </div>
                    </div>
                  </div>
      
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
          <!--[if mso]></div><![endif]-->
          <!--[if IE]></div><![endif]-->
        </body>
      </html>
      `
      : `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html
        xmlns="http://www.w3.org/1999/xhtml"
        xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office"
      >
        <head>
          <!--[if gte mso 9]>
            <xml>
              <o:OfficeDocumentSettings>
                <o:AllowPNG />
                <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
            </xml>
          <![endif]-->
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="x-apple-disable-message-reformatting" />
          <!--[if !mso]><!-->
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <!--<![endif]-->
          <title></title>
      
          <style type="text/css">
            @media only screen and (min-width: 620px) {
              .u-row {
                width: 600px !important;
              }
              .u-row .u-col {
                vertical-align: top;
              }
      
              .u-row .u-col-100 {
                width: 600px !important;
              }
            }
      
            @media (max-width: 620px) {
              .u-row-container {
                max-width: 100% !important;
                padding-left: 0px !important;
                padding-right: 0px !important;
              }
              .u-row .u-col {
                min-width: 320px !important;
                max-width: 100% !important;
                display: block !important;
              }
              .u-row {
                width: calc(100% - 40px) !important;
              }
              .u-col {
                width: 100% !important;
              }
              .u-col > div {
                margin: 0 auto;
              }
            }
            body {
              margin: 0;
              padding: 0;
            }
      
            table,
            tr,
            td {
              vertical-align: top;
              border-collapse: collapse;
            }
      
            p {
              margin: 0;
            }
      
            .ie-container table,
            .mso-container table {
              table-layout: fixed;
            }
      
            * {
              line-height: inherit;
            }
      
            a[x-apple-data-detectors="true"] {
              color: inherit !important;
              text-decoration: none !important;
            }
      
            table,
            td {
              color: #000000;
            }
            #u_body a {
              color: #0000ee;
              text-decoration: underline;
            }
            @media (max-width: 480px) {
              #u_row_10 .v-row-background-image--inner {
                background-position: center top !important;
                background-repeat: no-repeat !important;
              }
              #u_row_10 .v-row-background-image--outer {
                background-image: url("images/image-2.jpeg") !important;
                background-position: center top !important;
                background-repeat: no-repeat !important;
              }
              #u_row_10.v-row-background-image--outer {
                background-image: url("images/image-2.jpeg") !important;
                background-position: center top !important;
                background-repeat: no-repeat !important;
              }
              #u_content_text_15 .v-container-padding-padding {
                padding: 10px !important;
              }
              #u_content_text_15 .v-text-align {
                text-align: left !important;
              }
            }
          </style>
      
          <!--[if !mso]><!-->
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap"
            rel="stylesheet"
            type="text/css"
          />
          <!--<![endif]-->
        </head>
      
        <body
          class="clean-body u_body"
          style="
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
            background-color: #e7e7e7;
            color: #000000;
          "
        >
          <!--[if IE]><div class="ie-container"><![endif]-->
          <!--[if mso]><div class="mso-container"><![endif]-->
          <table
            id="u_body"
            style="
              border-collapse: collapse;
              table-layout: fixed;
              border-spacing: 0;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              vertical-align: top;
              min-width: 320px;
              margin: 0 auto;
              background-color: #e7e7e7;
              width: 100%;
            "
            cellpadding="0"
            cellspacing="0"
          >
            <tbody>
              <tr style="vertical-align: top">
                <td
                  style="
                    word-break: break-word;
                    border-collapse: collapse !important;
                    vertical-align: top;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
      
                  <div
                    id="u_row_10"
                    class="u-row-container v-row-background-image--outer"
                    style="
                      padding: 0px;
                      background-image: url('images/image-2.jpeg');
                      background-repeat: no-repeat;
                      background-position: center top;
                      background-color: #ffffff;
                    "
                  >
                    <div
                      class="u-row"
                      style="
                        margin: 0 auto;
                        min-width: 320px;
                        max-width: 600px;
                        overflow-wrap: break-word;
                        word-wrap: break-word;
                        word-break: break-word;
                        background-color: transparent;
                      "
                    >
                      <div
                        class="v-row-background-image--inner"
                        style="
                          border-collapse: collapse;
                          display: table;
                          width: 100%;
                          height: 100%;
                          background-color: transparent;
                        "
                      >
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td class="v-row-background-image--outer" style="padding: 0px;background-image: url('images/image-2.jpeg');background-repeat: no-repeat;background-position: center top;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr class="v-row-background-image--inner" style="background-color: transparent;"><![endif]-->
      
                        <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                        <div
                          class="u-col u-col-100"
                          style="
                            max-width: 320px;
                            min-width: 600px;
                            display: table-cell;
                            vertical-align: top;
                          "
                        >
                          <div
                            style="
                              height: 100%;
                              width: 100% !important;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          >
                            <!--[if (!mso)&(!IE)]><!--><div
                              style="
                                height: 100%;
                                padding: 0px;
                                border-top: 0px solid transparent;
                                border-left: 0px solid transparent;
                                border-right: 0px solid transparent;
                                border-bottom: 0px solid transparent;
                                border-radius: 0px;
                                -webkit-border-radius: 0px;
                                -moz-border-radius: 0px;
                              "
                            ><!--<![endif]-->
                              <table
                                style="font-family: 'Montserrat', sans-serif"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="v-container-padding-padding"
                                      style="
                                        overflow-wrap: break-word;
                                        word-break: break-word;
                                        padding: 10px;
                                        font-family: 'Montserrat', sans-serif;
                                      "
                                      align="left"
                                    >
                                      <table
                                        width="100%"
                                        cellpadding="0"
                                        cellspacing="0"
                                        border="0"
                                      >
                                        <tr>
                                          <td
                                            class="v-text-align"
                                            style="
                                              padding-right: 0px;
                                              padding-left: 0px;
                                            "
                                            align="center"
                                          >
                                            <img
                                              align="center"
                                              border="0"
                                              src="images/image-1.png"
                                              alt=""
                                              title=""
                                              style="
                                                outline: none;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                                clear: both;
                                                display: inline-block !important;
                                                border: none;
                                                height: auto;
                                                float: none;
                                                width: 100%;
                                                max-width: 580px;
                                              "
                                              width="580"
                                            />
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
      
                              <table
                                id="u_content_text_15"
                                style="font-family: 'Montserrat', sans-serif"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="v-container-padding-padding"
                                      style="
                                        overflow-wrap: break-word;
                                        word-break: break-word;
                                        padding: 10px;
                                        font-family: 'Montserrat', sans-serif;
                                      "
                                      align="left"
                                    >
                                      <div
                                        class="v-text-align"
                                        style="
                                          line-height: 140%;
                                          text-align: left;
                                          word-wrap: break-word;
                                        "
                                      >
                                        <p style="font-size: 14px; line-height: 140%">
                                          <span
                                            style="
                                              font-family: 'Open Sans', sans-serif;
                                              font-size: 14px;
                                              line-height: 19.6px;
                                            "
                                            >This Email Is Send By  <strong
                                              >${name}</strong
                                            ></span
                                          >
                                        </p>
      
                                        <p style="font-size: 14px; line-height: 140%">
                                           
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                          <span
                                            style="
                                              font-family: 'Open Sans', sans-serif;
                                              font-size: 14px;
                                              line-height: 19.6px;
                                            "
                                            >Email :
                                            <a
                                              rel="noopener"
                                              href="${email}"
                                              target="_blank"
                                              >${email}</a
                                            ></span
                                          >
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                           
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                          <span
                                            style="
                                              font-family: 'Open Sans', sans-serif;
                                              font-size: 14px;
                                              line-height: 19.6px;
                                            "
                                            >Phone Number :${phoneNumber}</span
                                          >
                                        </p>
      
                                        <br />
      
                                        <p style="font-size: 14px; line-height: 140%">
                                          <span
                                            style="
                                              font-family: 'Open Sans', sans-serif;
                                              font-size: 14px;
                                              line-height: 19.6px;
                                            "
                                            >Services : ${services}</span
                                          >
                                        </p>
                                        <br />
      
                                        <p style="font-size: 14px; line-height: 140%">
                                          <span
                                            style="
                                              font-family: 'Open Sans', sans-serif;
                                              font-size: 14px;
                                              line-height: 19.6px;
                                            "
                                            >How You Find Us : ${how_you_find_us}</span
                                          >
                                        </p>
                                        <br />
                                        <p style="font-size: 14px; line-height: 140%">
                                          <span
                                            style="
                                              font-family: 'Open Sans', sans-serif;
                                              font-size: 14px;
                                              line-height: 19.6px;
                                            "
                                            >Message : ${message}</span
                                          >
                                        </p>
      
                                        <p style="font-size: 14px; line-height: 140%">
                                           
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                           
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                           
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
      
                              <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                          </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                      </div>
                    </div>
                  </div>
      
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
          <!--[if mso]></div><![endif]-->
          <!--[if IE]></div><![endif]-->
        </body>
      </html>
      `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.send({ error: "Something went wrong" });
    } else {
      res.send({ success: "Submitted successfully" });
    }
  });
});

export default handler;
