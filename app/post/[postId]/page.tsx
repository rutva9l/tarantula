
import FullPost from '@/components/full-post';
import DashboardLayout from '@/components/dashboard-layout';

const PostPage = ({ params }: { params: { slug: string } }) => {
    return (
        <section>
            {/* @ts-expect-error Server Component */}
            <DashboardLayout first_element={<FullPost params={params} />} second_element={<></>} />
        </section>
    )
}

export default PostPage