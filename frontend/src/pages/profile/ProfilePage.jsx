// import { useRef, useState } from "react";
// import { Link } from "react-router-dom";

// import Posts from "../../components/common/Posts";
// import ProfileHeaderSkeleton from "../../components/skeletons/ProfileHeaderSkeleton";
// import EditProfileModal from "./EditProfileModal";

// import { POSTS } from "../../utils/db/dummy";

// import { FaArrowLeft } from "react-icons/fa6";
// import { IoCalendarOutline } from "react-icons/io5";
// import { FaLink } from "react-icons/fa";
// import { MdEdit } from "react-icons/md";


// const ProfilePage = () => {
// 	const [coverImg, setCoverImg] = useState(null);
// 	const [profileImg, setProfileImg] = useState(null);
// 	const [feedType, setFeedType] = useState("posts");

// 	const coverImgRef = useRef(null);
//     const profileImgRef = useRef(null);

//     const isLoading = false;
//     const isMyProfile = true;
//     const isPending = false;

// 	// const { username } = useParams();

// 	// const { follow, isPending } = useFollow();
// 	// const { data: authUser } = useQuery({ queryKey: ["authUser"] });

// 	// const {
// 	// 	data: user,
// 	// 	isLoading,
// 	// 	refetch,
// 	// 	isRefetching,
// 	// } = useQuery({
// 	// 	queryKey: ["userProfile"],
// 	// 	queryFn: async () => {
// 	// 		try {
// 	// 			const res = await fetch(`/api/users/profile/${username}`);
// 	// 			const data = await res.json();
// 	// 			if (!res.ok) {
// 	// 				throw new Error(data.error || "Something went wrong");
// 	// 			}
// 	// 			return data;
// 	// 		} catch (error) {
// 	// 			throw new Error(error);
// 	// 		}
// 	// 	},
// 	// });

// 	// const { isUpdatingProfile, updateProfile } = useUpdateUserProfile();

// 	// const isMyProfile = authUser._id === user?._id;
// 	// const memberSinceDate = formatMemberSinceDate(user?.createdAt);
// 	// const amIFollowing = authUser?.following.includes(user?._id);

// 	const handleImgChange = (e, state) => {
// 		const file = e.target.files[0];
// 		if (file) {
// 			const reader = new FileReader();
// 			reader.onload = () => {
// 				state === "coverImg" && setCoverImg(reader.result);
// 				state === "profileImg" && setProfileImg(reader.result);
// 			};
// 			reader.readAsDataURL(file);
// 		}
// 	};

// 	// useEffect(() => {
// 	// 	refetch();
// 	// }, [username, refetch]);

// 	return (
// 		<>
// 			<div className='flex-[4_4_0]  border-r border-gray-700 min-h-screen '>
// 				{/* HEADER */}
// 				{(isLoading) && <ProfileHeaderSkeleton />}
// 				{!isLoading && <p className='text-center text-lg mt-4'>User not found</p>}
// 				<div className='flex flex-col'>
// 					{!isLoading  && (
// 						<>
// 							<div className='flex gap-10 px-4 py-2 items-center'>
// 								<Link to='/'>
// 									<FaArrowLeft className='w-4 h-4' />
// 								</Link>
// 								<div className='flex flex-col'>
// 									<p className='font-bold text-lg'>{POSTS?.fullname}</p>
// 									<span className='text-sm text-slate-500'>{POSTS?.length} posts</span>
// 								</div>
// 							</div>
// 							{/* COVER IMG */}
// 							<div className='relative group/cover'>
// 								<img
// 									src={coverImg || POSTS?.coverImg || "/cover.png"}
// 									className='h-52 w-full object-cover'
// 									alt='cover image'
// 								/>
// 								{isMyProfile && (
// 									<div
// 										className='absolute top-2 right-2 rounded-full p-2 bg-gray-800 bg-opacity-75 cursor-pointer opacity-0 group-hover/cover:opacity-100 transition duration-200'
// 										onClick={() => coverImgRef.current.click()}
// 									>
// 										<MdEdit className='w-5 h-5 text-white' />
// 									</div>
// 								)}

// 								<input
// 									type='file'
// 									hidden
// 									accept='image/*'
// 									ref={coverImgRef}
// 									onChange={(e) => handleImgChange(e, "coverImg")}
// 								/>
// 								<input
// 									type='file'
// 									hidden
// 									accept='image/*'
// 									ref={profileImgRef}
// 									onChange={(e) => handleImgChange(e, "profileImg")}
// 								/>
// 								{/* USER AVATAR */}
// 								<div className='avatar absolute -bottom-16 left-4'>
// 									<div className='w-32 rounded-full relative group/avatar'>
// 										<img src={profileImg || POSTS?.profileImg || "/avatar-placeholder.png"} />
// 										<div className='absolute top-5 right-3 p-1 bg-primary rounded-full group-hover/avatar:opacity-100 opacity-0 cursor-pointer'>
// 											{isMyProfile && (
// 												<MdEdit
// 													className='w-4 h-4 text-white'
// 													onClick={() => profileImgRef.current.click()}
// 												/>
// 											)}
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 							<div className='flex justify-end px-4 mt-5'>
// 								{isMyProfile && <EditProfileModal authUser={authUser} />}
// 								{!isMyProfile && (
// 									<button
// 										className='btn btn-outline rounded-full btn-sm'
// 										// onClick={() => follow(user?._id)}
// 									>
// 										{isPending && "Loading..."}
// 										{!isPending &&  "Unfollow"}
// 										{!isPending &&  "Follow"}
// 									</button>
// 								)}
// 								{(coverImg || profileImg) && (
// 									<button
// 										className='btn btn-primary rounded-full btn-sm text-white px-4 ml-2'
// 										onClick={async () => {
// 											// await updateProfile({ coverImg, profileImg });
// 											setProfileImg(null);
// 											setCoverImg(null);
// 										}}
// 									>
// 										{isLoading ? "Updating..." : "Update"}
// 									</button>
// 								)}
// 							</div>

// 							<div className='flex flex-col gap-4 mt-14 px-4'>
// 								<div className='flex flex-col'>
// 									<span className='font-bold text-lg'>{POSTS?.fullname}</span>
// 									<span className='text-sm text-slate-500'>@{POSTS?.username}</span>
// 									<span className='text-sm my-1'>{POSTS?.bio}</span>
// 								</div>

// 								<div className='flex gap-2 flex-wrap'>
// 									{user?.link && (
// 										<div className='flex gap-1 items-center '>
// 											<>
// 												<FaLink className='w-3 h-3 text-slate-500' />
// 												<a
// 													href='https://youtube.com/@asaprogrammer_'
// 													target='_blank'
// 													rel='noreferrer'
// 													className='text-sm text-blue-500 hover:underline'
// 												>
// 													{/* Updated this after recording the video. I forgot to update this while recording, sorry, thx. */}
// 													{POSTS?.link}
// 												</a>
// 											</>
// 										</div>
// 									)}
// 									<div className='flex gap-2 items-center'>
// 										<IoCalendarOutline className='w-4 h-4 text-slate-500' />
// 										<span className='text-sm text-slate-500'></span>
// 									</div>
// 								</div>
// 								<div className='flex gap-2'>
// 									<div className='flex gap-1 items-center'>
// 										<span className='font-bold text-xs'>{POSTS?.following.length}</span>
// 										<span className='text-slate-500 text-xs'>Following</span>
// 									</div>
// 									<div className='flex gap-1 items-center'>
// 										<span className='font-bold text-xs'>{POSTS?.followers.length}</span>
// 										<span className='text-slate-500 text-xs'>Followers</span>
// 									</div>
// 								</div>
// 							</div>
// 							<div className='flex w-full border-b border-gray-700 mt-4'>
// 								<div
// 									className='flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 relative cursor-pointer'
// 									onClick={() => setFeedType("posts")}
// 								>
// 									Posts
// 									{feedType === "posts" && (
// 										<div className='absolute bottom-0 w-10 h-1 rounded-full bg-primary' />
// 									)}
// 								</div>
// 								<div
// 									className='flex justify-center flex-1 p-3 text-slate-500 hover:bg-secondary transition duration-300 relative cursor-pointer'
// 									onClick={() => setFeedType("likes")}
// 								>
// 									Likes
// 									{feedType === "likes" && (
// 										<div className='absolute bottom-0 w-10  h-1 rounded-full bg-primary' />
// 									)}
// 								</div>
// 							</div>
// 						</>
// 					)}

// 					<Posts feedType={feedType} username={POSTS?.username} userId={POSTS?._id} />
// 				</div>
// 			</div>
// 		</>
// 	);
// };
// export default ProfilePage;






import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import Posts from "../../components/common/Posts";
// import ProfileHeaderSkeleton from "../../components/skeletons/ProfileHeaderSkeleton";
// import EditProfileModal from "./EditProfileModal";

import { POSTS} from "../../util/db/dummy.js"

import { FaArrowLeft } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

// ✅ Dummy user (IMPORTANT)
const USER = {
	_id: "1",
	fullname: "Ashish Khatri",
	username: "ashish",
	bio: "Full Stack Developer | MERN",
	profileImg: "/avatar-placeholder.png",
	coverImg: "/cover.png",
	link: "https://github.com/ashish",
	followers: [1, 2, 3],
	following: [1, 2],
	createdAt: "2023-01-01",
};

const ProfilePage = () => {
	const [coverImg, setCoverImg] = useState(null);
	const [profileImg, setProfileImg] = useState(null);
	const [feedType, setFeedType] = useState("posts");

	const coverImgRef = useRef(null);
	const profileImgRef = useRef(null);

	const isLoading = false;
	const isMyProfile = true;


	const handleImgChange = (e, type) => {
		const file = e.target.files[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = () => {
			if (type === "cover") setCoverImg(reader.result);
			if (type === "profile") setProfileImg(reader.result);
		};
		reader.readAsDataURL(file);
	};

	return (
		<div className='flex-[4_4_0] border-r border-gray-700 min-h-screen'>
			{/* HEADER */}
			{isLoading && <ProfileHeaderSkeleton />}

			{!isLoading && (
				<>
					{/* TOP BAR */}
					<div className='flex gap-10 px-4 py-2 items-center'>
						<Link to='/'>
							<FaArrowLeft />
						</Link>
						<div>
							<p className='font-bold'>{USER.fullname}</p>
							<span className='text-sm text-slate-500'>
								{POSTS.length} posts
							</span>
						</div>
					</div>

					{/* COVER IMAGE */}
					<div className='relative group'>
						<img
							src={coverImg || USER.coverImg}
							className='h-52 w-full object-cover'
						/>

						{isMyProfile && (
							<button
								className='absolute top-2 right-2 bg-gray-800 p-2 rounded-full'
								onClick={() => coverImgRef.current.click()}
							>
								<MdEdit />
							</button>
						)}

						<input
							type='file'
							hidden
							ref={coverImgRef}
							onChange={(e) => handleImgChange(e, "cover")}
						/>

						{/* PROFILE IMAGE */}
						<div className='absolute -bottom-16 left-4'>
							<img
								src={profileImg || USER.profileImg}
								className='w-32 rounded-full border-4 border-black'
							/>
							{isMyProfile && (
								<MdEdit
									className='absolute bottom-2 right-2 cursor-pointer'
									onClick={() => profileImgRef.current.click()}
								/>
							)}
							<input
								type='file'
								hidden
								ref={profileImgRef}
								onChange={(e) => handleImgChange(e, "profile")}
							/>
						</div>
					</div>

					{/* ACTION BUTTON */}
					{/* <div className='flex justify-end px-4 mt-6'>
						{isMyProfile ? (
							// <EditProfileModal authUser={USER} />
						) : (
							<button className='btn btn-outline btn-sm rounded-full'>
								{isPending ? "Loading..." : "Follow"}
							</button>
						)}
					</div> */}

					{/* USER INFO */}
					<div className='px-4 mt-20'>
						<p className='font-bold'>{USER.fullname}</p>
						<p className='text-slate-500'>@{USER.username}</p>
						<p>{USER.bio}</p>

						<div className='flex gap-4 mt-2 text-sm text-slate-500'>
							<a href={USER.link} target='_blank'>
								<FaLink /> Website
							</a>
							<div>
								<IoCalendarOutline /> Joined 2023
							</div>
						</div>

						<div className='flex gap-4 mt-2'>
							<span>
								<b>{USER.following.length}</b> Following
							</span>
							<span>
								<b>{USER.followers.length}</b> Followers
							</span>
						</div>
					</div>

					{/* FEED TABS */}
					<div className='flex border-b border-gray-700 mt-4'>
						<button
							className={`flex-1 p-3 ${
								feedType === "posts" && "border-b-4 border-primary"
							}`}
							onClick={() => setFeedType("posts")}
						>
							Posts
						</button>
						<button
							className={`flex-1 p-3 ${
								feedType === "likes" && "border-b-4 border-primary"
							}`}
							onClick={() => setFeedType("likes")}
						>
							Likes
						</button>
					</div>

					<Posts feedType={feedType} username={USER.username} />
				</>
			)}
		</div>
	);
};

export default ProfilePage;
