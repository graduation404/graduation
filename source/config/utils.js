import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {COLORS, SHADOW, SIZES} from './theme';
import {useTranslation} from 'react-i18next';

const baseURL = 'https://mostafaelrefaey-001-site1.atempurl.com/api';
export default axios.create({
  baseURL: baseURL,
  timeout: 30000,
});

// get All users
export const GetAllUsers = async (setData, setError) => {
  try {
    const {data} = await axios.get(baseURL + '/users');
    setData(data);

    return data;
  } catch (error) {
    // console.log('error all users', error.response);
    let message = '';
    if (error.response !== undefined) {
      message = error.response;
      setError(true);
    } else {
      message = 'connection-error';
      setError(true);
    }

    // alert(JSON.stringify(message));
    // return message
    setError(true);
    throw new Error(message);
  }
};

// get specifiec user
export const GetSpecifiecUser = async id => {
  // const { t , i18n} = useTranslation();
  try {
    const {data} = await axios.get(baseURL + '/users/' + id);
    return data;
  } catch (error) {
    // console.log('error specifiec users', error.response);
    let message = '';
    if (error.response !== undefined) {
      message = error.response;
    } else {
      message = 'connection-error';
    }
    ToastAndroid.showWithGravity(
      'Error',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    );
    // alert(message);
    throw new Error(message);
  }
};
// delete specifiec user
export const DeleteSpecifiecUser = async id => {
  // const { t , i18n} = useTranslation();
  try {
    const {data} = await axios.delete(baseURL + '/users/' + id);
    ToastAndroid.showWithGravity(
      'Delete Succes',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    );
    return data;
  } catch (error) {
    // console.log('error delete users', error.response);
    let message = '';
    if (error.response !== undefined) {
      message = error.response;
    } else {
      message = 'connection-error';
    }

    ToastAndroid.showWithGravity(
      'Delete Failed',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    );
    throw new Error(message);
  }
};

// Creating a user
export const CreateUser = async userData => {
  try {
    const res = await axios.post(baseURL + '/users', userData);
    // console.log('data', JSON.stringify(res));
    return res.data;
  } catch (error) {
    // console.log('error create users', error.response);
    let message = '';
    if (error.response !== undefined) {
      message = error.response;
    } else {
      message = 'connection-error';
    }

    // alert(message);
    throw new Error(message);
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Creating a quiz
export const CreateQuiz = async (
  quizData,
  navigation,
  setEmpty,
  setLoading,
) => {
  // const { t , i18n} = useTranslation();
  // console.log(JSON.stringify(quizData));
  setLoading(true);
  try {
    const res = await axios.post(baseURL + '/quizs', quizData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: '*/*',
      },
      timeout:30000
    });
    ToastAndroid.showWithGravity(
      'Created',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    );

    navigation.navigate('Home');
    setEmpty();
    setLoading(false);
    console.log('====================================');
    console.log('ress', JSON.stringify(res));
    console.log('====================================');
    return res?.data;
  } catch (error) {
    console.log('error Create quiz', error);
    console.log('error all quizssss', JSON.stringify(error));

    let message = '';
    if (error.response !== undefined) {
      message = error.response;
    } else {
      message = 'connection-error';
    }
    setLoading(false);
    console.log('message', JSON.stringify(error));
    throw new Error(message);
  }
};

// get All quizes
export const GetAllQuizs = async () => {
  try {
    const {data} = await axios.get(baseURL + '/quizs');
    return data;
  } catch (error) {
    // console.lo/g('error all quizs', error.response);
    let message = '';
    if (error.response !== undefined) {
      message = error.response;
    } else {
      message = 'connection-error';
    }

    // alert(message);
    throw new Error(message);
  }
};

// delete specifiec quiz
export const DeleteSpecifiecQuiz = async id => {
  try {
    const {data} = await axios.delete(baseURL + '/quizs/' + id);
    return data;
  } catch (error) {
    // console.log('error delete quizs', error.response);
    let message = '';
    if (error.response !== undefined) {
      message = error.response;
    } else {
      message = 'connection-error';
    }

    // alert(message);
    throw new Error(message);
  }
};

// get specifiec quiz
export const GetSpecifiecQuiz = async id => {
  try {
    const {data} = await axios.get(baseURL + '/quizs/' + id);
    return data;
  } catch (error) {
    // console.log('error specifiec quizs', error.response);
    let message = '';
    if (error.response !== undefined) {
      message = error.response;
    } else {
      message = 'connection-error';
    }

    // alert(message);
    throw new Error(message);
  }
};

// get quizs in level and booklet
export const GetQuizsInLevelAndBooklet = async (level, booklet, ageGroup) => {
  // const { t , i18n} = useTranslation();
  try {
    const res = await axios.get(
      baseURL +
        '/quizs/getbylevelandbooklet' +
        '/' +
        level +
        '/' +
        booklet +
        '/' +
        ageGroup,
    );
    console.log('res', JSON.stringify(res));
    return res?.data;
  } catch (error) {
    let message = '';
    if (error.response !== undefined) {
      message = error.response;
    } else {
      message = 'connection-error';
    }
    ToastAndroid.showWithGravity(
      error.message ?? 'connection-error',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    );
    console.log('message', JSON.stringify(error));
    throw new Error(message);
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Creating a Quiz Result

// Creating a quiz
export const CreateUserquizs = async quizData => {
  // const { t , i18n} = useTranslation();
  // console.log('quizData', JSON.stringify(quizData));
  try {
    const res = await axios.post(baseURL + '/Userquizs', quizData);
    // console.log('data', res);
    ToastAndroid.showWithGravity(
      'Done',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    );
    return res.data;
  } catch (error) {
    // console.log('error Create quiz', error.response);
    let message = '';
    if (error.response !== undefined) {
      message = error.response;
    } else {
      message = 'connection-error';
    }
    ToastAndroid.showWithGravity(
      t('common:Error'),
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    );
    // alert(message);
    throw new Error(message);
  }
};

// Get All Userquizs
export const GetAllUserquizs = async setData => {
  try {
    const {data} = await axios.get(baseURL + '/Userquizs');
    setData(data);
    // alert(data);
    // console.log(data);
  } catch (error) {
    // console.log('error all Userquizs', error.response);
    let message = '';
    if (error.response !== undefined) {
      message = error.response;
    } else {
      message = 'connection-error';
    }

    // alert(message);
    throw new Error(message);
  }
};

// get specifiec quiz
export const GetSpecifiecUserquizs = async (id, setData) => {
  try {
    const {data} = await axios.get(baseURL + '/Userquizs/' + id);
    setData(data);
    alert(JSON.stringify(data));
  } catch (error) {
    // console.log('error specifiec Userquizs', error.response);
    let message = '';
    if (error.response !== undefined) {
      message = error.response;
    } else {
      message = 'connection-error';
    }

    // alert(message);
    throw new Error(message);
  }
};

// get Userquizs in level and booklet
export const GetUserquizsInLevelAndBooklet = async (
  UserId,
  level,
  booklet,
  setData,
  setQData,
) => {
  // console.log(
  //   baseURL +
  //     '/Userquizs/GetByUserIdAndLevelAndBooklet/' +
  //     UserId +
  //     '/' +
  //     level +
  //     '/' +
  //     booklet,
  // );
  try {
    const res = await axios.get(
      baseURL +
        '/Userquizs/GetByUserIdAndLevelAndBooklet/' +
        UserId +
        '/' +
        level +
        '/' +
        booklet,
    );
    // console.log('res + ', JSON.stringify(res));

    let {data} = res;
    let list1 = [];
    for (let i = 0; i < data.length; i++) {
      setQData(prev => prev + data[i].quizEffortDual);

      for (let j = 0; j < data[i].userQuestionResults.length; j++) {
        list1.push(data[i].userQuestionResults[j]);
      }
    }
    setData(list1);

    return data;
  } catch (error) {
    // console.log('error Userquizs in level and booklet', error.response);
    let message = '';
    if (error.response !== undefined) {
      message = error.response;
    } else {
      message = 'connection-error';
    }

    // alert(message);
    throw new Error(message);
  }
};
