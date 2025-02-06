import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL

export const getProjectWebData = async (projectId) => {
  try {
    const response = await axios.get(`${API_URL}/api/archive/${projectId}`); //env에 넣기
    return response.data;
  } catch (error) {
    console.error("Error fetching project data:", error);
    throw error;
  }
};

export const getAllProjectList = async (pageId) => {
  try {
    const response = await axios.get(`${API_URL}/api/archive/projects/all?page=${pageId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching project data:", error);
    throw error;
  }
};

export const getWebProjectList = async (pageId) => {
  try {
    const response = await axios.get(`${API_URL}/api/archive/projects/web?page=${pageId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching project data:", error);
    throw error;
  }
};

export const getAppProjectList = async (pageId) => {
  try {
    const response = await axios.get(`${API_URL}/api/archive/projects/app?page=${pageId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching project data:", error);
    throw error;
  }
};