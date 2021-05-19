import imgA from './녹서스.jpg';
function About() {
  return (
    <div className="Picture">
      <h1>모습</h1>
      <div>
        <img
          src={ imgA }
          width='512'
          height='206'
          alt='testA' />
      </div>
    </div>
  );
}

export default About;
