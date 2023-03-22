const LoadingIcon = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "40px",
        height: "40px",
        background: "transparent",
        borderRadius: "50%",
        border: "3px solid #0070f3",
        borderTopColor: "transparent",
        animation: "spin 1s linear infinite",
        zIndex: 999,
      }}
    ></div>
  );
};

export default LoadingIcon;
