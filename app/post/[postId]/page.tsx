
import FullPost from '@/components/full-post';
import DashboardLayout from '../../../components/dashboard-layout';
import Search from '@/components/search';

const PostPage = ({ params }: { params: { slug: string } }) => {
    return (
        <section>
            <DashboardLayout first_element={<FullPost params={params} />} second_element={<></>} />
        </section>
    )
}

export default PostPage