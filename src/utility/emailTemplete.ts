export const emailTemplate = ( email: string) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body>
            <div
                style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    width: 100%;
                "   
            >
                <div
                    style="
                        background-color: #f1f1f1;
                        padding: 20px;
                        border-radius: 10px;    
                    "       
                >   
                    <div    
                        style="
                            background-color: white;
                            padding: 20px;
                            border-radius: 10px;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                        "
                    >

                        <h1
                            style="
                                font-size: 24px;
                                font-weight: bold;
                                margin-bottom: 10px;
                            "
                        >
                            Welcome ${email}!
                        </h1>

                        <p
                            style="
                                font-size: 16px;
                                margin-bottom: 20px;
                            "
                        >
                           Thank You for contacting us. We are happy to serve you and We appreciate your time and consideration.
                           We will get back to you as soon as possible.

                        </p>

                        <p
                            style="
                                font-size: 16px;
                                margin-bottom: 20px;
                            "
                        >
                            Best regards,
                        </p>

                        <p
                            style="
                                font-size: 16px;
                                margin-bottom: 20px;
                            "
                        >
                            Team Social Motion
                        </p>

                    </div>
                </div>

            </div>
        </body>
    </html>
    `;
};
