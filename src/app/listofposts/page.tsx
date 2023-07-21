import Image from 'next/image';

const getPostsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const getUsersData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
const getDogData = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-cache"
  });
  return res.json();
};

export default async function ListOfPosts() {
  const [posts, users,dog] = await Promise.all([getPostsData(), getUsersData(), getDogData()]);

  return (
    <div>
      <Image src={dog.message} alt="dog" width={300} height={300}/>
      <div>
        {posts.map((post: any) => {
          return <p>{post.title}</p>;
        })}
      </div>
      <div>
        {users.map((user: any) => {
          return <p>{user.name}</p>;
        })}
      </div>
    </div>
  );
}
