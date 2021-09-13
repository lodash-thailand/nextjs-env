import React from 'react'
import getConfig from 'next/config'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

function IndexPage () {
  console.log('Run on Client: BACKEND_DOMAIN_URL =>', publicRuntimeConfig?.BACKEND_DOMAIN_URL)
  console.log('Run on Server: BACKEND_SERVICE_URL =>', serverRuntimeConfig?.BACKEND_SERVICE_URL)
  console.log('Run on Server: KAJAME =>', serverRuntimeConfig?.KAJAME)
  console.log('process env BACKEND_DOMAIN_URL =>', process.env.BACKEND_DOMAIN_URL)

  return (
    <div>IndexPage</div>
  )
}

// export async function getServerSideProps (context) {
//   return {
//     props: {}
//   }
// }

export default IndexPage
