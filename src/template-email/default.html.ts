export function TemplateHTML(main: string): string {
  return `
        <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Email Template</title>
  </head>
  <body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
    <!-- Wrapper -->
    <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f4;">
      <tr>
        <td align="center">
          <!-- Container -->
          <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff;">
            
            <!-- Header -->
            <tr>
              <td style="background-color: #2e7d32; padding: 20px; text-align: center;">
                <img src="https://s3.amazonaws.com/enlizt-resources-prod/companies/28fee650-a0b2-11ed-99b7-fd885a4fbd86_256_avatar?nocache=1733856989442" alt="Logo" style="display: block; margin: auto; width: 60px; height: 60px" />
              </td>
            </tr>

            <!-- Main Content -->
            ${main}

            <!-- Footer -->
            <tr>
              <td style="background-color: #2e7d32; color: #ffffff; padding: 15px; text-align: center; font-size: 14px;">
                © 2025 Manager Farm. Todos os direitos reservados.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
        `;
}

export function MainWelcome(name: string, text: string) {
  return `
    <tr>
              <td style="background-color: #e8f5e9; padding: 30px; color: #333;">
                <h2 style="color: #2e7d32;">Olá, ${name}!</h2>
                <p style="font-size: 16px;">
                  ${text}
                </p>
                <p style="margin-top: 30px;">
                  <a href="https://example.com" style="background-color: #2e7d32; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 4px;">Acessar plataforma</a>
                </p>
              </td>
            </tr>
    `;
}

export function KeyAccess(name: string, key: string) {
  return `
<tr>
              <td style="background-color: #e8f5e9; padding: 30px; color: #333">
                <h2 style="color: #2e7d32">Olá, ${name}!</h2>
                <h3 style="color: #2e7d32">Sua chave de acesso é:</h3>
                <input
                  type="text"
                  value="${key}"
                  disabled
                  style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px; background-color: #f5f5f5 ; text-align: center;" ; 
                />
                <p style="margin-top: 30px"></p>
              </td>
            </tr>
`;
}
