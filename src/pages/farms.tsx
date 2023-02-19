import { ChangeEvent, useEffect, useState } from 'react'

import FarmsContent from '../components/farms'
import Layout from '../sections/Layout'

export default function FarmsPage() {
  return (
    <Layout>
      {/* Hero Section  */}
      <FarmsContent />
    </Layout>
  )
}
