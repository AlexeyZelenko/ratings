import axios from 'axios';

const mockApi = axios.create({
    baseURL: 'https://679b745d33d316846323e855.mockapi.io',
});

// Интерфейс для типизации данных рейтинга
export interface RatingData {
    id?: number;
    rating: number;
    review: string;
}

// Получение всех рейтингов
export const fetchRatingData = async (): Promise<RatingData[]> => {
    try {
        const response = await mockApi.get('/ratings');
        if (response.status !== 200) {
            throw new Error('Failed to fetch rating data');
        }
        return response.data;
    } catch (error) {
        console.error('Error fetching ratings:', error);
        throw error;
    }
};

// Добавление нового рейтинга
export const addRating = async (ratingData: RatingData): Promise<RatingData> => {
    try {
        const response = await mockApi.post('/ratings', ratingData);
        if (response.status !== 201) {
            throw new Error('Failed to add rating');
        }
        return response.data;
    } catch (error) {
        console.error('Error adding rating:', error);
        throw error;
    }
};

// Обновление существующего рейтинга
export const updateRating = async (id: number, ratingData: RatingData): Promise<RatingData> => {
    try {
        const response = await mockApi.put(`/ratings/${id}`, ratingData);
        if (response.status !== 200) {
            throw new Error('Failed to update rating');
        }
        return response.data;
    } catch (error) {
        console.error('Error updating rating:', error);
        throw error;
    }
};

// Удаление рейтинга
export const deleteRating = async (id: number): Promise<void> => {
    try {
        const response = await mockApi.delete(`/ratings/${id}`);
        if (response.status !== 200) {
            throw new Error('Failed to delete rating');
        }
    } catch (error) {
        console.error('Error deleting rating:', error);
        throw error;
    }
};

export const getAverageRating = async (): Promise<number> => {
    try {
        const ratings = await fetchRatingData();
        const sum = ratings.reduce((acc, curr) => acc + curr.rating, 0);
        return Number((sum / ratings.length).toFixed(1));
    } catch (error) {
        console.error('Error calculating average rating:', error);
        throw error;
    }
};