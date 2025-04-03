import React, { useState, useEffect } from "react";
import { Home, Users, Package, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "../config/axoisIntence";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => (
  <div className="container py-4">
    <Package size={48} className="mb-3" />
    <h1 className="h4">Manage Users here</h1>
    <div className="row mt-4">
      <div className="col-md-3">
        <div className="card p-3 shadow-sm">
          <Users size={48} className="mb-3 text-secondary" />
          <p className="text-muted">All users will be listed here</p>
          <Link to="/userRegistration" className="btn btn-primary">
            Add New User
          </Link>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card p-3 shadow-sm">
          <Package size={48} className="mb-3 text-secondary" />
          <p className="text-muted">All products will be listed here</p>
          <button className="btn btn-primary">Add New Product</button>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card p-3 shadow-sm">
          <Users size={48} className="mb-3 text-secondary" />
          <p className="text-muted">For manage all thnigs</p>
          <button className="btn btn-primary">Create new Admin</button>
        </div>
      </div>
    </div>
  </div>
);

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/user/getuser");

      if (response.status !== 200) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      setUsers(response.data.users || []);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/user/delete/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleUpdate = (userId) => {
    alert(`Update user: ${userId}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center text-primary">User List</h2>
      {loading && <p className="text-center text-secondary">Loading...</p>}
      {error && <p className="text-danger text-center">Error: {error}</p>}
      {!loading && !error && users.length === 0 && (
        <p className="text-center text-muted">No users found.</p>
      )}
      {!loading && !error && users.length > 0 && (
        <div className="table-responsive">
          <table className="table table-hover table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>
                    <img
                      src={user.picture}
                      alt="User"
                      className="rounded-circle"
                      width="50"
                      height="50"
                    />
                  </td>
                  <td>{`${user.firstName} ${user.middleName || ""} ${
                    user.lastName
                  }`}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{new Date(user.dateOfBirth).toLocaleDateString()}</td>
                  <td>{user.address}</td>
                  <td>
                    <button
                      onClick={() => handleUpdate(user._id)}
                      className="btn btn-primary btn-sm me-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-danger btn-sm"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    category: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/product/getAll")
      .then((response) => {
        setProducts(response.data.products || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      });
  }, []);

  const handleRemove = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    setDeleting(id);
    try {
      const response = await axios.delete(
        `http://localhost:3000/product/delete/${id}`
      );
      console.log("Delete Response:", response);

      if (response.status === 200) {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== id)
        );
      } else {
        alert("Failed to delete the product. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting product:", error.response || error.message);
      alert("Network error! Unable to delete product.");
    } finally {
      setDeleting(null);
    }
  };

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/product/create", newProduct)
      .then((response) => {
        setProducts([...products, response.data.product]);
        setShowForm(false);
        setNewProduct({
          name: "",
          description: "",
          price: "",
          imageUrl: "",
          category: "",
        });
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        alert("Failed to add product. Please try again.");
      });
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="h4">Manage Products</h1>
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          Add New Product
        </button>
      </div>

      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : products.length === 0 ? (
        <p className="text-warning">No products found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={
                        product.imageUrl || "https://via.placeholder.com/100"
                      }
                      alt={product.name}
                      className="img-thumbnail"
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.description || "No description available"}</td>
                  <td>${product.price || "N/A"}</td>
                  <td>{product.category || "N/A"}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemove(product._id)}
                      disabled={deleting === product._id}
                    >
                      {deleting === product._id ? (
                        <>
                          <span className="spinner-border spinner-border-sm"></span>{" "}
                          Removing...
                        </>
                      ) : (
                        <>
                          <Trash size={16} /> Remove
                        </>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pop-up Form (Modal) */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content p-4 bg-white rounded shadow">
            <h2 className="mb-3">Add New Product</h2>
            <form onSubmit={handleAddProduct}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  value={newProduct.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Image URL</label>
                <input
                  type="text"
                  className="form-control"
                  name="imageUrl"
                  value={newProduct.imageUrl}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Category</label>
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  value={newProduct.category}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Pop-up Form (Modal) CSS */}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-content {
          width: 100%;
          max-width: 500px;
        }
      `}</style>
    </div>
  );
};

export default function AdminPanel() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "users":
        return <UserManagement />;
      case "products":
        return <Products />;
      case "dashboard":
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="d-flex vh-100">
      <aside
        className="bg-dark text-white p-3 d-flex flex-column"
        style={{ width: "250px" }}
      >
        <h2 className="h5 text-center mb-3">Admin Panel</h2>
        <button
          onClick={() => setActivePage("dashboard")}
          className={`btn btn-dark w-100 text-start mb-2 ${
            activePage === "dashboard" ? "active" : ""
          }`}
        >
          <Home className="me-2" /> Dashboard
        </button>
        <button
          onClick={() => setActivePage("users")}
          className={`btn btn-dark w-100 text-start mb-2 ${
            activePage === "users" ? "active" : ""
          }`}
        >
          <Users className="me-2" /> User Management
        </button>
        <button
          onClick={() => setActivePage("products")}
          className={`btn btn-dark w-100 text-start ${
            activePage === "products" ? "active" : ""
          }`}
        >
          <Package className="me-2" /> Products
        </button>
      </aside>
      <main className="flex-grow-1 p-4 bg-light">{renderPage()}</main>
    </div>
  );
}
