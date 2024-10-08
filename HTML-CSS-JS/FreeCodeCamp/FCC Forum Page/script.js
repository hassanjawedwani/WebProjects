const forumData = document.getElementById("forum-data");


const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Backend Development", className: "backend" },
};

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

const getAvatars = (users, posters) => {
  const avatars = posters
    .map((poster) => {
      const { user_id } = poster;
      const user = users.find((user) => user.id === user_id);
      const { avatar_template } = user;

      if (avatar_template) {
        const modified_avatar_template = avatar_template.replace(/{size}/, 30);
        const userAvatarURL = modified_avatar_template.startsWith(
          "/user_avatar/"
        )
          ? avatarUrl.concat(modified_avatar_template)
          : modified_avatar_template;
        return `<img src="${userAvatarURL}" alt="${user.username}"/>`;
      }
    })
    .join("");
  return avatars;
};

const getCategory = (id) => {
  const selectedCategory = {};
  if (allCategories.hasOwnProperty(id)) {
    selectedCategory.category = allCategories[id].category;
    selectedCategory.className = allCategories[id].className;
  } else {
    selectedCategory.category = "General";
    selectedCategory.className = "general";
    selectedCategory.id = 1;
  }
  const categoryURL = `${forumCategoryUrl}${selectedCategory.className}/${id}`;
  return `<a href="${categoryURL}" class="category ${selectedCategory.className}">${selectedCategory.category}</a>`;
}

const UpdateUI = (data) => {
  const { topic_list, users } = data;
  const { topics } = topic_list;
  console.log("data", data);
  console.log("Topics", topics);
  topics.map((item) => {
    const { title, views, bumped_at, posts_count, posters, category_id , slug, id} = item;
    forumData.innerHTML += `
      <tr>
        <td><a href="${forumTopicUrl}/${slug}/${id}" class="topic-title">${title}</a>${getCategory(category_id)}</td>
        <td>
          <div class="avatar-container">${getAvatars(users, posters)}</div>
        </td>
        <td>${posts_count - 1}</td>
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
