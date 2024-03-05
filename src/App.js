import React from "react";
import { Routes, Route } from "react-router-dom";
// import OrianSoft from "./orianSoft/OrianSoft";
import Home from "./everythings/home/Home";
import User from "./everythings/user/User";
import Admin from "./everythings/admin/Admin";
// import Welcome from "./orianSoft/pages/Welcome";
// import Services from "./orianSoft/pages/Services";
// import Team from "./orianSoft/pages/Team";
// import Portfolio from "./orianSoft/pages/Portfolio";
// import Pricing from "./orianSoft/pages/Pricing";
// import About from "./orianSoft/pages/About";
// import Contact from "./orianSoft/pages/Contact";
// import Login from "./auth/Login";
// import Register from "./auth/Register";
import WelcomeHome from "./everythings/home/pages/WelcomeHome";
import WelcomeUser from "./everythings/user/pages/WelcomeUser";
import WelcomeAdmin from "./everythings/admin/pages/WelcomeAdmin";
import Error404 from "./errors/Error404";
import HomeContact from "./everythings/home/pages/HomeContact";
import UserContact from "./everythings/user/pages/UserContact";
import HomeReels from "./everythings/home/pages/HomeReels";
import HomePosts from "./everythings/home/pages/HomePosts";
import HomeVideos from "./everythings/home/pages/HomeVideos";
import HomeMovies from "./everythings/home/pages/HomeMovies";
import HomeShorts from "./everythings/home/pages/HomeShorts";
import HomeKids from "./everythings/home/pages/HomeKids";
import HomeEducation from "./everythings/home/pages/HomeEducation";
import HomeBuy from "./everythings/home/pages/HomeBuy";
import HomeSell from "./everythings/home/pages/HomeSell";
import HomeInvestment from "./everythings/home/pages/HomeInvestment";
import HomeRent from "./everythings/home/pages/HomeRent";
import Message from "./everythings/user/pages/Message";
import Notification from "./everythings/user/pages/Notification";
import Profile from "./everythings/user/pages/profile/Profile";
import Gallery from "./everythings/user/pages/profile/Gallery";
import Galleries from "./everythings/user/components/profile/gallery/Galleries";
import Profiles from "./everythings/user/components/profile/gallery/Profiles";
import Covers from "./everythings/user/components/profile/gallery/Covers";
import Albums from "./everythings/user/components/profile/gallery/Albums";
import Friends from "./everythings/user/pages/profile/Friends";
import FriendsContent from "./everythings/user/components/profile/friends/FriendsContent";
import Suggestions from "./everythings/user/components/profile/friends/Suggestions";
import Recents from "./everythings/user/components/profile/friends/Recents";
import Forgotten from "./everythings/user/components/profile/friends/Forgotten";
import Pendings from "./everythings/user/components/profile/friends/Pendings";
import Blocked from "./everythings/user/components/profile/friends/Blocked";
import Canceled from "./everythings/user/components/profile/friends/Canceled";
import UserAbout from "./everythings/user/pages/profile/UserAbout";
import Activity from "./everythings/user/pages/profile/Activity";
import Settings from "./everythings/user/pages/profile/Settings";
import Account from "./everythings/user/components/profile/settings/Account";
import Email from "./everythings/user/components/profile/settings/Email";
import Password from "./everythings/user/components/profile/settings/Password";
import Privacy from "./everythings/user/components/profile/settings/Privacy";
import EmailNotification from "./everythings/user/components/profile/settings/EmailNotification";
import WebNotification from "./everythings/user/components/profile/settings/WebNotification";
import UserDetails from "./everythings/user/components/profile/settings/UserDetails";
import DeleteUser from "./everythings/user/components/profile/settings/DeleteUser";
import Posts from "./everythings/user/pages/posts/Posts";
import PostContent from "./everythings/user/components/posts/PostContent";
import BlogsContent from "./everythings/user/components/posts/BlogsContent";
import ArticlesContent from "./everythings/user/components/posts/ArticlesContent";
import NewsContent from "./everythings/user/components/posts/NewsContent";
import EventContent from "./everythings/user/components/posts/EventContent";
import PostGallery from "./everythings/user/pages/posts/PostGallery";
import PostGalleryContent from "./everythings/user/components/posts/gallery/PostGalleryContent";
import BlogGalleryContent from "./everythings/user/components/posts/gallery/BlogGalleryContent";
import ArticleGalleryContent from "./everythings/user/components/posts/gallery/ArticleGalleryContent";
import NewsGalleryContent from "./everythings/user/components/posts/gallery/NewsGalleryContent";
import EventGalleryContent from "./everythings/user/components/posts/gallery/EventGalleryContent";
import PostActivity from "./everythings/user/pages/posts/PostActivity";
import PostSettings from "./everythings/user/pages/posts/PostSettings";
import PostSettingsContent from "./everythings/user/components/posts/settings/PostSettingsContent";
import BlogSettingsContent from "./everythings/user/components/posts/settings/BlogSettingsContent";
import ArticleSettingsContent from "./everythings/user/components/posts/settings/ArticleSettingsContent";
import NewsSettingsContent from "./everythings/user/components/posts/settings/NewsSettingsContent";
import EventSettingsContent from "./everythings/user/components/posts/settings/EventSettingsContent";
import Reels from "./everythings/user/pages/reels/Reels";
import ReelContent from "./everythings/user/components/reels/ReelContent";
import ShortsContent from "./everythings/user/components/reels/ShortsContent";
import LongsContents from "./everythings/user/components/reels/LongsContents";
import MixedContent from "./everythings/user/components/reels/MixedContent";
import EventsContent from "./everythings/user/components/reels/EventsContent";
import BlogContent from "./everythings/user/components/reels/BlogContent";
import ReelGallery from "./everythings/user/pages/reels/ReelGallery";
import ReelGalleryContent from "./everythings/user/components/reels/gallery/ReelGalleryContent";
import ShortsGalleryContent from "./everythings/user/components/reels/gallery/ShortsGalleryContent";
import LongsGalleryContent from "./everythings/user/components/reels/gallery/LongsGalleryContent";
import BlogsGalleryContent from "./everythings/user/components/reels/gallery/BlogsGalleryContent";
import MixedGalleryContent from "./everythings/user/components/reels/gallery/MixedGalleryContent";
import EventsGalleryContent from "./everythings/user/components/reels/gallery/EventsGalleryContent";
import ReelActivity from "./everythings/user/pages/reels/ReelActivity";
import ReelSettings from "./everythings/user/pages/reels/ReelSettings";
import ReelSettingsContent from "./everythings/user/components/reels/settings/ReelSettingsContent";
import ShortsSettingsContent from "./everythings/user/components/reels/settings/ShortsSettingsContent";
import LongsSettingsContent from "./everythings/user/components/reels/settings/LongsSettingsContent";
import MixedSettingsContent from "./everythings/user/components/reels/settings/MixedSettingsContent";
import BlogsSettingsContent from "./everythings/user/components/reels/settings/BlogsSettingsContent";
import EventsSettingsContent from "./everythings/user/components/reels/settings/EventsSettingsContent";
import Groups from "./everythings/user/pages/group/Groups";
import GroupsContent from "./everythings/user/components/groups/GroupsContent";
import Pages from "./everythings/user/pages/page/Pages";
import PagesContent from "./everythings/user/components/pages/PagesContent";
import GroupBlogsContent from "./everythings/user/components/groups/GroupBlogsContent";
import GroupArticlesContent from "./everythings/user/components/groups/GroupArticlesContent";
import GroupNewsContent from "./everythings/user/components/groups/GroupNewsContent";
import PagesBlogsContent from "./everythings/user/components/pages/PagesBlogsContent";
import PagesArticlesContent from "./everythings/user/components/pages/PagesArticlesContent";
import PagesNewsContent from "./everythings/user/components/pages/PagesNewsContent";
import GroupsGallery from "./everythings/user/pages/group/GroupsGallery";
import GroupGalleryContent from "./everythings/user/components/groups/gallery/GroupGalleryContent";
import GroupCustomGalleryContent from "./everythings/user/components/groups/gallery/GroupCustomGalleryContent";
import GroupBlogGalleryContent from "./everythings/user/components/groups/gallery/GroupBlogGalleryContent";
import GroupArticleGalleryContent from "./everythings/user/components/groups/gallery/GroupArticleGalleryContent";
import GroupNewsGalleryContent from "./everythings/user/components/groups/gallery/GroupNewsGalleryContent";
import PageGallery from "./everythings/user/pages/page/PageGallery";
import PageGalleryContent from "./everythings/user/components/pages/gallery/PageGalleryContent";
import PageGalleryCustomContent from "./everythings/user/components/pages/gallery/PageGalleryCustomContent";
import PageGalleryBlogContent from "./everythings/user/components/pages/gallery/PageGalleryBlogContent";
import PageGalleryArticleContent from "./everythings/user/components/pages/gallery/PageGalleryArticleContent";
import PageGalleryNewsContent from "./everythings/user/components/pages/gallery/PageGalleryNewsContent";
import GroupActivity from "./everythings/user/pages/group/GroupActivity";
import PageActivity from "./everythings/user/pages/page/PageActivity";
import GroupSettings from "./everythings/user/pages/group/GroupSettings";
import GroupSettingsContent from "./everythings/user/components/groups/settings/GroupSettingsContent";
import GroupSettingsCoustomContent from "./everythings/user/components/groups/settings/GroupSettingsCoustomContent";
import GroupSettingsBlogContent from "./everythings/user/components/groups/settings/GroupSettingsBlogContent";
import GroupSettingsArticleContent from "./everythings/user/components/groups/settings/GroupSettingsArticleContent";
import GroupSettingsNewsContent from "./everythings/user/components/groups/settings/GroupSettingsNewsContent";
import PageSettings from "./everythings/user/pages/page/PageSettings";
import PageSettingsContent from "./everythings/user/components/pages/settings/PageSettingsContent";
import PageSettingsCoustomContent from "./everythings/user/components/pages/settings/PageSettingsCoustomContent";
import PageSettingsBlogContent from "./everythings/user/components/pages/settings/PageSettingsBlogContent";
import PageSettingsArticleContent from "./everythings/user/components/pages/settings/PageSettingsArticleContent";
import PageSettingsNewsContent from "./everythings/user/components/pages/settings/PageSettingsNewsContent";
import Movie from "./everythings/user/pages/movie/Movie";
import MovieContent from "./everythings/user/components/movie/MovieContent";
import MoviePlaylistContent from "./everythings/user/components/movie/MoviePlaylistContent";
import MovieChannelsContent from "./everythings/user/components/movie/MovieChannelsContent";
import MovieAboutContent from "./everythings/user/components/movie/MovieAboutContent";
import MovieSettingsContent from "./everythings/user/components/movie/MovieSettingsContent";
import MovieUploadContent from "./everythings/user/components/movie/MovieUploadContent";
export default function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<OrianSoft />}>
          <Route index element={<Welcome />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route> */}
        <Route path="/" element={<Home />}>
          <Route index element={<WelcomeHome />} />
          <Route path="/contact" element={<HomeContact />} />
          <Route path="/reels" element={<HomeReels />} />
          <Route path="/posts" element={<HomePosts />} />
          <Route path="/videos" element={<HomeVideos />} />
          <Route path="/movies" element={<HomeMovies />} />
          <Route path="/shorts" element={<HomeShorts />} />
          <Route path="/kids" element={<HomeKids />} />
          <Route path="/education" element={<HomeEducation />} />
          <Route path="/buy" element={<HomeBuy />} />
          <Route path="/sell" element={<HomeSell />} />
          <Route path="/investment" element={<HomeInvestment />} />
          <Route path="/rent" element={<HomeRent />} />
        </Route>

        <Route path="/user" element={<User />}>
          <Route path="/user/dashboard" element={<WelcomeUser />} />
          <Route path="/user/contact" element={<UserContact />} />
          <Route path="/user/message" element={<Message />} />
          <Route path="/user/notification" element={<Notification />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/gallery" element={<Gallery />}>
            <Route index element={<Galleries />} />
            <Route path="/user/gallery/galleries" element={<Galleries />} />
            <Route path="/user/gallery/profiles" element={<Profiles />} />
            <Route path="/user/gallery/covers" element={<Covers />} />
            <Route path="/user/gallery/album/family" element={<Albums />} />
            <Route path="/user/gallery/album/friends" element={<Albums />} />
            <Route path="/user/gallery/album/relatives" element={<Albums />} />
          </Route>
          <Route path="/user/friends" element={<Friends />}>
            <Route index element={<FriendsContent />} />
            <Route path="/user/friends/suggestions" element={<Suggestions />} />
            <Route path="/user/friends/recents" element={<Recents />} />
            <Route path="/user/friends/forgotten" element={<Forgotten />} />
            <Route path="/user/friends/pendings" element={<Pendings />} />
            <Route path="/user/friends/blocked" element={<Blocked />} />
            <Route path="/user/friends/canceled" element={<Canceled />} />
          </Route>
          <Route path="/user/about" element={<UserAbout />} />
          <Route path="/user/activity" element={<Activity />} />
          <Route path="/user/settings" element={<Settings />}>
            <Route index element={<Account />} />
            <Route path="/user/settings/email" element={<Email />} />
            <Route path="/user/settings/password" element={<Password />} />
            <Route path="/user/settings/privacy" element={<Privacy />} />
            <Route
              path="/user/settings/email/notification"
              element={<EmailNotification />}
            />
            <Route
              path="/user/settings/web/notification"
              element={<WebNotification />}
            />
            <Route
              path="/user/settings/account/details"
              element={<UserDetails />}
            />
            <Route
              path="/user/settings/delete/account"
              element={<DeleteUser />}
            />
          </Route>
          <Route path="/user/posts" element={<Posts />}>
            <Route index element={<PostContent />} />
            <Route path="/user/posts/blogs" element={<BlogsContent />} />
            <Route path="/user/posts/articles" element={<ArticlesContent />} />
            <Route path="/user/posts/news" element={<NewsContent />} />
            <Route path="/user/posts/live/event" element={<EventContent />} />
            <Route path="/user/posts/live/video" element={<EventContent />} />
            <Route path="/user/posts/live/meeting" element={<EventContent />} />
          </Route>
          <Route path="/user/post/gallery" element={<PostGallery />}>
            <Route index element={<PostGalleryContent />} />
            <Route
              path="/user/post/gallery/blog"
              element={<BlogGalleryContent />}
            />
            <Route
              path="/user/post/gallery/article"
              element={<ArticleGalleryContent />}
            />
            <Route
              path="/user/post/gallery/news"
              element={<NewsGalleryContent />}
            />
            <Route
              path="/user/post/gallery/event"
              element={<EventGalleryContent />}
            />
          </Route>
          <Route path="/user/post/activity" element={<PostActivity />} />
          <Route path="/user/post/settings" element={<PostSettings />}>
            <Route index element={<PostSettingsContent />} />
            <Route
              path="/user/post/settings/blog"
              element={<BlogSettingsContent />}
            />
            <Route
              path="/user/post/settings/article"
              element={<ArticleSettingsContent />}
            />
            <Route
              path="/user/post/settings/news"
              element={<NewsSettingsContent />}
            />
            <Route
              path="/user/post/settings/event"
              element={<EventSettingsContent />}
            />
            <Route
              path="/user/post/settings/meeting"
              element={<EventSettingsContent />}
            />
            <Route
              path="/user/post/settings/live"
              element={<EventSettingsContent />}
            />
          </Route>
          <Route path="/user/reels" element={<Reels />}>
            <Route index element={<ReelContent />} />
            <Route path="/user/reels/shorts" element={<ShortsContent />} />
            <Route path="/user/reels/longs" element={<LongsContents />} />
            <Route path="/user/reels/blogs" element={<BlogContent />} />
            <Route path="/user/reels/mixed" element={<MixedContent />} />
            <Route path="/user/reels/events" element={<EventsContent />} />
          </Route>
          <Route path="/user/reel/gallery" element={<ReelGallery />}>
            <Route index element={<ReelGalleryContent />} />
            <Route
              path="/user/reel/gallery/shorts"
              element={<ShortsGalleryContent />}
            />
            <Route
              path="/user/reel/gallery/longs"
              element={<LongsGalleryContent />}
            />
            <Route
              path="/user/reel/gallery/blogs"
              element={<BlogsGalleryContent />}
            />
            <Route
              path="/user/reel/gallery/mixed"
              element={<MixedGalleryContent />}
            />
            <Route
              path="/user/reel/gallery/events"
              element={<EventsGalleryContent />}
            />
          </Route>
          <Route path="/user/reel/activity" element={<ReelActivity />} />
          <Route path="/user/reel/settings" element={<ReelSettings />}>
            <Route index element={<ReelSettingsContent />} />
            <Route
              path="/user/reel/settings/shorts"
              element={<ShortsSettingsContent />}
            />
            <Route
              path="/user/reel/settings/longs"
              element={<LongsSettingsContent />}
            />
            <Route
              path="/user/reel/settings/blogs"
              element={<BlogsSettingsContent />}
            />
            <Route
              path="/user/reel/settings/mixed"
              element={<MixedSettingsContent />}
            />
            <Route
              path="/user/reel/settings/events"
              element={<EventsSettingsContent />}
            />
          </Route>
          <Route path="/user/groups" element={<Groups />}>
            <Route index element={<GroupsContent />} />
            <Route path="/user/groups/blogs" element={<GroupBlogsContent />} />
            <Route
              path="/user/groups/articles"
              element={<GroupArticlesContent />}
            />
            <Route path="/user/groups/news" element={<GroupNewsContent />} />
          </Route>
          <Route path="/user/group/gallery" element={<GroupsGallery />}>
            <Route index element={<GroupGalleryContent />} />
            <Route
              path="/user/group/gallery/coustom"
              element={<GroupCustomGalleryContent />}
            />
            <Route
              path="/user/group/gallery/blog"
              element={<GroupBlogGalleryContent />}
            />
            <Route
              path="/user/group/gallery/article"
              element={<GroupArticleGalleryContent />}
            />
            <Route
              path="/user/group/gallery/news"
              element={<GroupNewsGalleryContent />}
            />
          </Route>
          <Route path="/user/group/activity" element={<GroupActivity />} />
          <Route path="/user/group/settings" element={<GroupSettings />}>
            <Route index element={<GroupSettingsContent />} />
            <Route
              path="/user/group/settings/coustom"
              element={<GroupSettingsCoustomContent />}
            />
            <Route
              path="/user/group/settings/blog"
              element={<GroupSettingsBlogContent />}
            />
            <Route
              path="/user/group/settings/article"
              element={<GroupSettingsArticleContent />}
            />
            <Route
              path="/user/group/settings/news"
              element={<GroupSettingsNewsContent />}
            />
          </Route>
          <Route path="/user/pages" element={<Pages />}>
            <Route index element={<PagesContent />} />
            <Route path="/user/pages/blogs" element={<PagesBlogsContent />} />
            <Route
              path="/user/pages/articles"
              element={<PagesArticlesContent />}
            />
            <Route path="/user/pages/news" element={<PagesNewsContent />} />
          </Route>
          <Route path="/user/page/gallery" element={<PageGallery />}>
            <Route index element={<PageGalleryContent />} />
            <Route
              path="/user/page/gallery/coustom"
              element={<PageGalleryCustomContent />}
            />
            <Route
              path="/user/page/gallery/blog"
              element={<PageGalleryBlogContent />}
            />
            <Route
              path="/user/page/gallery/article"
              element={<PageGalleryArticleContent />}
            />
            <Route
              path="/user/page/gallery/news"
              element={<PageGalleryNewsContent />}
            />
          </Route>
          <Route path="/user/page/activity" element={<PageActivity />} />
          <Route path="/user/page/settings" element={<PageSettings />}>
            <Route index element={<PageSettingsContent />} />
            <Route
              path="/user/page/settings/coustom"
              element={<PageSettingsCoustomContent />}
            />
            <Route
              path="/user/page/settings/blog"
              element={<PageSettingsBlogContent />}
            />
            <Route
              path="/user/page/settings/article"
              element={<PageSettingsArticleContent />}
            />
            <Route
              path="/user/page/settings/news"
              element={<PageSettingsNewsContent />}
            />
          </Route>
          <Route path="/user/movies" element={<Movie />}>
            <Route index element={<MovieContent />} />
            <Route
              path="/user/movies/playlist"
              element={<MoviePlaylistContent />}
            />
            <Route
              path="/user/movies/channels"
              element={<MovieChannelsContent />}
            />
            <Route path="/user/movies/about" element={<MovieAboutContent />} />
            <Route
              path="/user/movies/settings"
              element={<MovieSettingsContent />}
            />
            <Route
              path="/user/movies/upload"
              element={<MovieUploadContent />}
            />
          </Route>
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<WelcomeAdmin />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}
