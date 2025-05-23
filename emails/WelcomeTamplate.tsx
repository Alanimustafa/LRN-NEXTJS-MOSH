import React from 'react'
import { Container, Text, Link, Preview, Html } from '@react-email/components'

const WelcomeTamplate = ({name}: {name: string}) => {
  return (
   <Html>
    <body>
      <Preview>Welcome to Scorpion</Preview>
        <Container className="bg-white p-4">
          <Text className="text-2xl font-bold">Welcome to Scorpion!</Text>
          <Text className="mt-2">Hello {name} ,</Text>
          <Text className="mt-2">Thank you for signing up for Scorpion. We are excited to have you on board!</Text>
          <Text className="mt-2">To get started, please click the link below:</Text>
          <Link href="http://localhost:3000" className="text-blue-500 mt-4">Get Started</Link>
          <Text className="mt-4">Best regards,</Text>
          <Text>The Scorpion Team</Text>
        </Container>
    </body>
   </Html> 
  )
}

export default WelcomeTamplate