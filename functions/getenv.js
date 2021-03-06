const {
  EBOOKS_USERNAME,
  EBOOKS_PASSWORD,
  LAUNCHPACKS_PASSWORD,
  LAUNCHPACKS_USERNAME,
  DOMAIN_PASSWORD
} = process.env



exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify({
      ebooksUsername: EBOOKS_USERNAME,
      ebooksPassword: EBOOKS_PASSWORD,
      launchpacksPassword: LAUNCHPACKS_PASSWORD,
      launchpacksUsername: LAUNCHPACKS_USERNAME,
      domainPassword: DOMAIN_PASSWORD
    })
  }
}