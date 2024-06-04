import Feed from '@/components/feed';
import DashboardLayout from '../../components/dashboard-layout';
import Search from '@/components/search';

const PostPage = () => {
    return (
        <section>
            <DashboardLayout first_element={<Feed type="post"/>} second_element={<></>} />
        </section>
    )
}

export default PostPage