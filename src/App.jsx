import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/felipimats.png',
      name: 'Felipi Matias',
      role: 'Developer Web'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galeraa!'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto desenvolvido com React :)'},
      { type: 'link', content: 'felipi.design/doctorcare'},
    ],
    publishedAt: new Date('2023-04-04 12:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galeraa!'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto desenvolvido com React :)'},
      { type: 'link', content: 'Diego.design/doctorcare'},
    ],
    publishedAt: new Date('2023-04-04 12:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map(post => {
            return(
              <Post 
                key={post.id}
                author= {post.author}
                content= {post.content}
                publishedAt= {post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>    
  )
}

