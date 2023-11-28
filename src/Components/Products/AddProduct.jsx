import React, { useState } from 'react'
import Bussiness_Sidebar from '../Bussiness_Sidebar'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const navigate = useNavigate()
  const [productName, setProductName] = useState('');
  const [skuname, setSkuName] = useState('');
  const [ProUnit, setAddProUnit] = useState('')
  const [ProBrand, setProBrand] = useState('');
  const [Procategory, setProCategory] = useState('');
  const [ProsubCategory, setProSubCategory] = useState('');
  const [proweight, setProWeight] = useState('');
  const [proBatchno, setProBatchNo] = useState('');
  const [proPacking, setProPacking] = useState('');
  const [proHsn, setProHsn] = useState('');
  const [proTax, setProTax] = useState('');
  const [error, setError] = useState(false);
  const UNIThandelchange = (e) => {
    setAddProUnit(e.target.value)
  }
  const BrandHandelChange = (e) => {
    setProBrand(e.target.value)
  }
  const CategoryHandelChange = (e) => {
    setProCategory(e.target.value)
  }


  const subcategoryHandel = (e) => {
    setProSubCategory(e.target.value)
  }

  const TaxHndelchange = (e) => {
    setProTax(e.target.value)
  }




  const Add_product_bussiness = async (e) => {

    if (!productName || !skuname || !ProUnit || !ProBrand
      || !Procategory
      || !ProsubCategory || !proweight
      || !proBatchno || !proPacking || !proHsn || !proTax

    ) {
      setError(true);
      return false
    }

    const userId = JSON.parse(localStorage.getItem('user'))._id;
    let result = await fetch("http://localhost:8000/add-product", {
      method: "post",
      body: JSON.stringify({
        productName, skuname, ProUnit, ProBrand,
        Procategory,
        ProsubCategory, proweight
        , proBatchno, proPacking, proHsn, proTax,
        userId
      }),
      headers: {
        "Content-type": "application/json"
      }
    });
    result = await result.json();
    navigate("/Product-list")
    // console.log("reult", result);

  }

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* <!-- Menu --> */}

          <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="menu-inner-shadow"></div>

            <Bussiness_Sidebar />
          </aside>
          {/* <!-- / Menu --> */}

          {/* <!-- Layout container --> */}
          <div className="layout-page">
            {/* <!-- Navbar --> */}

            <Navbar />

            {/* <!-- / Navbar --> */}

            {/* <!-- Content wrapper --> */}
            <div className="content-wrapper">
              {/* <!-- Content --> */}

              <div className="container-xxl flex-grow-1 container-p-y">

                <div className="row">
                  <div className="col-md-12">
                    <div className="card mb-4">
                      <hr className="my-0" />
                      <div className="card-body">
                        {/* form start */}
                        <div >
                          <div className="row">
                            <div className="mb-3 col-md-6">
                              <label for="productName" className="form-label">Product Name</label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder='Enter Product Name..'
                                id="productName"
                                name="productName"
                                value={productName} onChange={(e) => { setProductName(e.target.value) }}
                                autofocus />
                            </div>
                            <div className="mb-3 col-md-3">
                              <label for="sku" className="form-label">SKU</label>
                              <input className="form-control" type="text" name="sku" id="sku"
                                placeholder='Enter SKU name ..'
                                value={skuname} onChange={(e) => { setSkuName(e.target.value) }}
                              />
                            </div>
                            <div className="mb-3 col-md-3">
                              <label for="unit" className="form-label">Unit</label>
                              <select id="unit" className="select2 form-select" onChange={UNIThandelchange}>

                                <option value="">Select</option>
                                <option value="Pcs">Pcs</option>
                                <option value="Ltr">Ltr</option>
                                <option value="KG">KG</option>
                              </select>
                            </div>
                            <div className="mb-3 col-md-3">
                              <label for="brand" className="form-label">Brand</label>
                              <select id="brand" className="select2 form-select" onChange={BrandHandelChange}>
                                <option value="">Select</option>
                                <option value="Brand-A">Brand-A</option>
                                <option value="Brand-B">Brand-B</option>
                                <option value="Brand-C">Brand-C</option>
                              </select>
                            </div>
                            <div className="mb-3 col-md-3">
                              <label for="category" className="form-label">Category</label>
                              <select id="category" className="select2 form-select" onChange={CategoryHandelChange}>
                                <option value="">Select</option>
                                <option value="Category-A">Category-A</option>
                                <option value="Category-B">Category-B</option>
                                <option value="Category-c">Category-C</option>
                              </select>
                            </div>
                            <div className="mb-3 col-md-3">
                              <label for="subcategory" className="form-label">Sub Category</label>
                              <select id="subcategory" className="select2 form-select" onChange={subcategoryHandel}>
                                <option value="">Select</option>
                                <option value="Sub Category-A">Sub Category-A</option>
                                <option value="Sub Category-B">Sub Category-B</option>
                                <option value="Sub Category-C">Sub Category-C</option>
                              </select>
                            </div>
                            <div className="mb-3 col-md-3">
                              <label for="weight" className="form-label">Weight</label>
                              <input className="form-control" type="text" name="weight" id="weight"
                                placeholder='Enter weight..'
                                value={proweight} onChange={(e) => { setProWeight(e.target.value) }}
                              />
                            </div>
                            <div className="mb-3 col-md-3">
                              <label for="batchno" className="form-label">Batch No</label>
                              <input className="form-control" type="text" name="batchno" id="batchno"
                                value={proBatchno} onChange={(e) => { setProBatchNo(e.target.value) }}
                                placeholder='Enter Batch Number..'
                              />
                            </div>
                            <div className="mb-3 col-md-3">
                              <label for="packing" className="form-label">Packing</label>
                              <input className="form-control" type="text" name="packing" id="packing"
                                placeholder='Enter paching..'
                                value={proPacking} onChange={(e) => { setProPacking(e.target.value) }}
                              />
                            </div>
                            <div className="mb-3 col-md-3">
                              <label for="hsn" className="form-label">HSN</label>
                              <input className="form-control" type="text" name="hsn" id="hsn" placeholder='Enter HSN...'
                                value={proHsn} onChange={(e) => { setProHsn(e.target.value) }}
                              />
                            </div>
                            <div className="mb-3 col-md-3">
                              <label for="subcategory" className="form-label">Tax</label>
                              <select id="subcategory" className="select2 form-select" onChange={TaxHndelchange} >
                                <option value="">Select</option>
                                <option value="28%">28%</option>
                                <option value="18%">18%</option>
                                <option value="12%">12%</option>
                                <option value="5%">5%</option>
                              </select>
                            </div>
                          </div>
                          <div className="mt-2">
                            <button type="submit" className="btn btn-primary me-2 " onClick={Add_product_bussiness}>ADD Product</button>
                          </div>
                        </div>
                      </div>
                      {/* <!-- /Account --> */}
                    </div>

                  </div>
                </div>
              </div>
              {/* <!-- / Content --> */}



              <div className="content-backdrop fade"></div>
            </div>
            {/* <!-- Content wrapper --> */}
          </div>
          {/* <!-- / Layout page --> */}
        </div>

        {/* <!-- Overlay --> */}
        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
    </>
  )
}

export default AddProduct;
