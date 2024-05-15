

function Homepage() {
    return (
      <div className="Homepage">
        <div
            className='p-5 text-center bg-image'
            style={{ backgroundColor: "black", height: 500 }}
        >
            <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='text-white'>
                    <h1 className='mb-3'>Ray Visions</h1>
                    <h4 className='mb-3'>Liquid Core Light Guides and Radiation Imaging Products</h4>
                </div>
            </div>
        </div>

        <div className='p-5' style={{height: 300}}>
            <div className="d-flex flex-row flex-wrap justify-content-evenly align-items-center h-100">
                <h4>We manufacture high-efficiency light guides for a variety of applications.</h4>

                <img 
                src={process.env.PUBLIC_URL + "/placeholder_img.jpg"}
                style={{height:200, borderRadius:30}}></img>
            </div>
            
        </div>

        <div className="p-5 container">
            <h2>Why Light Guides?</h2>
            <p>Liquid core UV/VIS light guides deliver much more light than fiber optic light guides.</p>

            <p>Fiber optic light guides are made up of individual round fibers which cannot be packed together without empty spaces. Ray Visions' liquid core light guides have no empty spaces.</p>

            <p>Each individual fiber is also surrounded by a cladding which even further reduces the active area of the fiber optic light guide. Ray Visions' liquid core light guides only have a single outer cladding. Inside of that, the active area is 100%.</p>
        </div>

        <div className="p-5 container">
            <h1>What We Offer</h1>
            <p>Light Guides and Sources</p>
            <p>Medical and Animal Imaging</p>
        </div>

      </div>
    );
  }
  
  export default Homepage;