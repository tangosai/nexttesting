import Header from "../../components/Header";

export const revalidate = 120;

export default async function Home() {
  const imgurl = "https://guprojects.gitam.edu/kautilya-admin/public/alumni/";
  const url =
    "https://guprojects.gitam.edu/kautilya-admin/api/fetch-alumniprofiles";
  // const teamData = await fetch(url).then((res) => res.json());
  let data = await fetch(url);
  let posts = await data.json();
  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-4 gap-5">
          {posts.data.map((data, index) => (
            <div key={index} className="rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <img src={`${imgurl}${data.profile}`} />
                <div className="font-bold text-xl mb-2">{data.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
