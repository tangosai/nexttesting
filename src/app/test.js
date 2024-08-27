import Header from "../../components/Header";

export default async function test({ post }) {
  // let data = await fetch(
  //   "https://guprojects.gitam.edu/kautilya-admin/api/fetch-ourteamfounding"
  // );
  // let posts = await data.json();
  const posts = post;
  console.log(posts);
  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-4 gap-5">
          {/* {posts.map((each) => (
            <div className="rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const url = "https://guprojects.gitam.edu/kautilya-admin/api/";
  // const [teamres] = await Promise.all([fetch(`${url}team`)]);
  // const [teamData] = await Promise.all([teamres.json()]);
  // return {
  //   props: { teamData },
  //   revalidate: 60,
  // };
  const posts = await fetch(`${url}fetch-ourteamfounding`).then((res) =>
    res.json()
  );

  return posts.map((post) => ({
    props: { post },
  }));
}
