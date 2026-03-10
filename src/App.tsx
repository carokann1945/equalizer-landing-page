import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import { motion } from 'motion/react';

const variants = {
  enter: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function App() {
  return (
    <motion.div
      key="result"
      variants={variants}
      initial="enter"
      animate="visible"
      transition={{ duration: 0.5, ease: 'easeInOut' }}>
      <Header />
      <main>
        <section>
          <Content />
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;
