namespace :webpack do
  task :precompile do
    run_locally do
      with rails_env: fetch(:stage) do
        `rm -rf public/assets`
        `BABEL_ENV=production webpack --config webpack.config.js`
      end
    end
  end

  task :upload_bundled_assets do
    on roles(:app) do
      upload! 'public/assets', "#{release_path}/public", recursive: true
    end
  end
end

after 'deploy:updated', 'webpack:precompile'
after 'webpack:precompile', 'webpack:upload_bundled_assets'
