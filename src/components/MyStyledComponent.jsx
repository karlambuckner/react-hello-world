function MyStyledComponent(props) {
  return (
   <div>
      <p className="orange-text">only this paragraph will get the style :)</p>
      <style jsx>{`
        .orange-text {
          color: orange;
        }
    `}</style>
  </div>
  );
}

export default MyStyledComponent;
