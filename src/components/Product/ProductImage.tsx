import { ImageSlider, PagingImageSlider } from "../Sliders";

const ProductImage = () => {
	return (
		<div className="flex-1">
			<div className="lg:w-[450px] mx-auto">
				{/* Desktop view Image Slider */}
				<div className="hidden lg:block">
					<PagingImageSlider />
				</div>
				{/* Mobile view Image Slider */}
				<div className="lg:hidden">
					<ImageSlider />
				</div>
			</div>
		</div>
	);
};

export default ProductImage;