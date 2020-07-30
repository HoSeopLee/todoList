package com.example.todoList.config;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

import javax.sql.DataSource;

/**
 * MybatisConfig
 */
@Configuration
public class MybatisConfig {
  // 자동 설정 -> 삭제
  // 레이어 구분
  // 인테페이스 기반으로 구현

  // 데이터 소스 생성 * n
  // 커넥션 풀... * n
// * n
  @Bean
  public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {

    SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
    sessionFactory.setDataSource(dataSource);

    Resource[] res = new PathMatchingResourcePatternResolver().getResources("classpath:mapper/*Mapper.xml");
    sessionFactory.setMapperLocations(res);

    return sessionFactory.getObject();
  }

  // 트랙잭션 선언

  // 추후 개발
  // -> chainedTransactionmanager, atomikos

}