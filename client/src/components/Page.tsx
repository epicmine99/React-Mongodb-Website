import React from "react";

interface PageProps {
  // Define any props here if needed
}

const Page: React.FC<PageProps> = () => {
  return (

<div style={{width: '100%', height: '100%', position: 'relative'}}>
<div style={{width: 720, height: 743, left: 0, top: 0, position: 'absolute', background: '#222222'}} />
<img style={{width: 721, height: 743, left: 720, top: 0, position: 'absolute'}} src="https://via.placeholder.com/721x743" />
</div>
);
};

export default Page;