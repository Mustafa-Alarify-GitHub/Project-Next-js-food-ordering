import React from 'react'

const Dialog = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDialog = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        {/* زر فتح الحوار */}
        <button
          onClick={toggleDialog}
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Open Dialog
        </button>
  
        {/* الحوار */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-lg font-bold mb-4">Dialog Title</h2>
              <p className="text-gray-600 mb-6">
                This is a dialog box. You can place any content here.
              </p>
              <div className="flex justify-end">
                <button
                  onClick={toggleDialog}
                  className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
}

export default Dialog