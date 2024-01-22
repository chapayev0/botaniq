export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: 'https://www.ceylone.lk/wp-content/uploads/2021/11/nurserylive-g-tree-of-andhra-pradesh-neem-plant.jpg',
                thumbnailImageSrc: 'https://www.ceylone.lk/wp-content/uploads/2021/11/nurserylive-g-tree-of-andhra-pradesh-neem-plant.jpg',
                alt: 'Kohomba Tree',
                title: 'Kohomba Tree'
            },
            {
                itemImageSrc: 'https://www.ceylone.lk/wp-content/uploads/2021/11/morgosa_-e.jpg',
                thumbnailImageSrc: 'https://www.ceylone.lk/wp-content/uploads/2021/11/morgosa_-e.jpg',
                alt: 'Kohomba Leaves',
                title: 'Kohomba Leaves'
            },
            {
                itemImageSrc: 'http://www.instituteofayurveda.org/plants/images/plants/00817/plant00817-00205.jpg',
                thumbnailImageSrc: 'http://www.instituteofayurveda.org/plants/images/plants/00817/plant00817-00205.jpg',
                alt: 'Kohomba Roots',
                title: 'Kohomba Roots'
            },
            {
                itemImageSrc: 'http://www.instituteofayurveda.org/plants/images/plants/00817/plant00817-00206.jpg',
                thumbnailImageSrc: 'http://www.instituteofayurveda.org/plants/images/plants/00817/plant00817-00206.jpg',
                alt: 'Kohomba Trunk',
                title: 'Kohomba Trunk'
            },
            {
                itemImageSrc: 'http://www.instituteofayurveda.org/plants/images/plants/00817/plant00817-00207.jpg',
                thumbnailImageSrc: 'http://www.instituteofayurveda.org/plants/images/plants/00817/plant00817-00207.jpg',
                alt: 'Kohomba Tree',
                title: 'Kohomba Tree'
            },
           
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};

