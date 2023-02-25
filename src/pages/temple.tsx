import { ChangeEvent, useEffect, useState } from "react";

import TempleContent from "../components/temple";
import Layout from "../sections/Layout";

export default function TemplePage() {
  return (
    <Layout>
      {/* Hero Section  */}
      <TempleContent />
    </Layout>
  );
}
