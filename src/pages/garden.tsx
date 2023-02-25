import { ChangeEvent, useEffect, useState } from 'react'

import GardenContent from '../components/garden'
import Layout from '../sections/Layout'

export default function GardenPage() {
  return (
    <Layout>
      {/* Hero Section  */}
      <GardenContent />
    </Layout>
  );
}
