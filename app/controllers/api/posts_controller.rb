class Api::PostsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user
  before_action :set_post, 



  def index
    render json: @user.posts
  end

  def create
    post = @user.posts.new(post_params)
    if post.save
      render json:post
    else
      render json: {message:'Did not save'}
  end

  def update
    if @post.update(post_params)
      render json: @post
     else render json:{message:'Did not update'}
    end
  end

  def destroy 
    @post.destroy
  end

  private

 def set_post
  @post = Post.find(params[:post_id])
 end

 def set_user
  @user = User.find(params[:id])
 end

 def post_params
  params.require(:post).permit(:body, :title)
 end


end
