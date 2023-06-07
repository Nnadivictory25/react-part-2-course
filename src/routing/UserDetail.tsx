import { useParams, useSearchParams } from 'react-router-dom';

const UserDetailPage = () => {
	const params = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	console.log(searchParams.get('name'));

	return <p>User {params.id}</p>;
};

export default UserDetailPage;
