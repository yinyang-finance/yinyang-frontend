import { ChangeEvent, useEffect, useState } from 'react'

import GardenContent from '../components/garden'
import Layout from '../sections/Layout'

export default function FarmsPage() {
  return (
    <Layout>
      {/* Hero Section  */}
      <GardenContent />
    </Layout>
  );
}
