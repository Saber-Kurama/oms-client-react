/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/3/23.
 */
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

export default {
  host,
  port,
  url: `http://${host}:${port}`
};
