import { FaYinYang } from 'react-icons/fa'

import StatsContent from '../components/stats'
import Layout from '../sections/Layout'

export default function IndexPage() {
  return (
    <Layout>
      <div className="flex flex-col m-auto text-center w-fit p-5 mb-0">
        <FaYinYang className="w-48 h-48" />
        <div className="font-bold text-3xl">YinYang</div>
      </div>
      <StatsContent />
    </Layout>
  );
}
