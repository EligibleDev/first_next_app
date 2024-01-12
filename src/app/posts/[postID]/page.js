const DynamicRoute = ({ params, searchParams }) => {
      console.log(params, searchParams)

      return (
            <div>
                  this is my dynamic page:{params.postID}
            </div>
      );
};

export default DynamicRoute;