const forumData = document.getElementById("forum-data");

const forumLatest =
  "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";

const getViews = (views) => {
  if (views >= 1000) {
    return `${Math.floor(views / 1000)}k`;
  } else {
    return views;
  }
};

const getActivity = (posted_time) => {
  const currTime = new Date();
  const postTime = new Date(posted_time);
  const minutes = Math.floor((currTime - postTime) / 60);
  const hours = Math.floor((currTime - postTime) / 24);
  const days = Math.floor((currTime - postTime) / 86400000);
  if (minutes < 60) {
    return `${minutes}m ago`;
  } else if (hours < 24) {
    return `${hours}h ago`;
  } else {
    return `${days}d ago`;
  }
};

const UpdateUI = (data) => {
  // console.log(data);
  const { topic_list } = data;
  const { topics } = topic_list;
  console.log("Topics", topics);
  topics.map((item) => {
    const { title, views, bumped_at } = item;
    forumData.innerHTML += `
      <tr>
        <td>${title}</td>
        <td></td>
        <td></td>
        <td>${getViews(views)}</td>
        <td>${getActivity(bumped_at)}</td>
      </tr>
    `;
  });
};

const getForumData = async () => {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    UpdateUI(data);
  } catch (err) {
    alert(`A error is happening in fetching Data \n${err}`);
  }
};

getForumData();
